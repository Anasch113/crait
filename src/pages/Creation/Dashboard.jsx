import React, { useState, useEffect } from "react";
import "./styles/Dashboard.css";
import Nav from "./Nav";
import Top from "./Top";
import Agents from "./Agents";
import Create from "./Create";
import { ref, get, set, getDatabase, update } from "firebase/database";
import { database } from "../../firebase";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie"
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { v4 as uuidv4 } from 'uuid';


const network = 'https://api.devnet.solana.com';
const Dashboard = () => {


  // Connect to the Solana cluster
  const connection = new Connection(network);
  const wallet = useWallet();

  const [currentSubject, setCurrentSubject] = useState("AI Agents");
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [isDiconnect, setIsDisconnect] = useState(false);
  const [twitterConnected, setTwitterConnected] = useState(false);

  const navigate = useNavigate()
  const location = useLocation()


  const [balance, setBalance] = useState(null);

  const handleNavClick = (subject) => {

    if (subject === "Create AI Agent") {
      if (!walletAddress) {
        toast("Please connect your wallet first")
      }
      else {
        setShowCreatePopup(true);
      }


    } else {
      setCurrentSubject(subject);
    }
  };

  const handleClosePopup = () => {
    setShowCreatePopup(false);
  };

  const handleCreateSubmit = async (newAgent) => {
    try {
      console.log("New Agent Created:", newAgent);
      const userAgentsRef = ref(database, `users/${walletAddress}/agents`);
      const snapshot = await get(userAgentsRef);
      let agents = [];

      if (snapshot.exists()) {
        agents = snapshot.val();
      }

      // Assign a unique random ID to the new agent
      const newAgentWithId = {
        ...newAgent,
        id: uuidv4(), // Generate a fixed random ID
      };

      // Update the agents array with the new agent
      const updatedAgents = [...agents, newAgentWithId];

      await set(userAgentsRef, updatedAgents);
      window.location.reload();
      console.log("New agent created and saved:", newAgentWithId);
      console.log("Updated agents list:", updatedAgents);
      setShowCreatePopup(false);
    } catch (error) {
      console.log("error while creating the agent", error);
    }
  };
  console.log("agent", currentSubject)




  // Authentication Logic >>>>>>>>>>>>


  const handleWalletLogin = async (walletAddress) => {


    // Reference to the user profile
    const userRef = ref(database, `users/${walletAddress}`);

    // Check if the user profile exists
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      console.log("User already exists:", snapshot.val());
    } else {

      const newUser = {

        metadata: {
          username: `User-${walletAddress.substring(0, 6)}`,
          joined: new Date().toISOString(),
        },

        createdAgents: [],
      };

      await set(userRef, newUser);
      console.log("New user profile created:", newUser);
    }
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const status = searchParams.get("status");
    const twitterSessionId = searchParams.get("twitterSessionId");

    console.log("Twitter session ID:", twitterSessionId);

    const handleTwitterSetup = async () => {
      try {
        if (status === "twitter-connected" && twitterSessionId) {
          console.log("Twitter connected, sessionId:", twitterSessionId);

          const agentId = Cookies.get("agentId");
          console.log("Agent ID:", agentId);

          if (walletAddress && agentId) {
            Cookies.remove("agentId");

            // Reference to the specific user's data in Firebase
            const userRef = ref(database, `users/${walletAddress}/agents`);
            const snapshot = await get(userRef);

            if (!snapshot.exists()) {
              throw new Error("Agents data not found.");
            }

            const agents = snapshot.val();

            // Find the agent index using agentId
            const agentIndex = agents.findIndex((agent) => agent.id === agentId);

            if (agentIndex === -1) {
              throw new Error(`Agent with ID ${agentId} not found.`);
            }

            // Update the twitterSessionId for the specific agent
            agents[agentIndex].twitterSessionId = twitterSessionId;

            // Save the updated agents list back to Firebase
            await set(userRef, agents);

            toast.success("Twitter Connected");
            console.log("Twitter session ID saved successfully.");
          }

          setShowCreatePopup(true);
          setTwitterConnected(true);
        }
      } catch (error) {
        console.error("Error in Twitter setup:", error);
        toast.error("Failed to connect to Twitter. Please try again.");
      }
    };

    handleTwitterSetup();
  }, [walletAddress]);


  console.log("walltet addresses in dashboard", walletAddress)



  return (
    <div className="dashboard">
      <Nav activeSubject={currentSubject} onNavClick={handleNavClick} />

      <main className="dashboard-content">
        <Top
          activeSubject={currentSubject}
          balance={balance}
          setBalance={setBalance}
          walletAddress={walletAddress}
          setWalletAddress={setWalletAddress}
          handleWalletLogin={handleWalletLogin}
          setIsDisconnect={setIsDisconnect}
          connection={connection}
          wallet={wallet}
        />
        {currentSubject === "AI Agents" && (
          <Agents

            activeSubject={currentSubject}
            onNavClick={handleNavClick}
            walletAddress={walletAddress}
            balance={balance}
            isDiconnect={isDiconnect}
            twitterConnected={twitterConnected}
            setTwitterConnected={setTwitterConnected}
            handleCreateSubmit={handleCreateSubmit}
          />
        )}
      </main>

      {showCreatePopup && (
        <div className="popup-overlay">
          <Create onClose={handleClosePopup} onSubmit={handleCreateSubmit} twitterConnected={twitterConnected} walletAddress={walletAddress} balance={balance} connection={connection} wallet={wallet} />
        </div>
      )}


    </div>
  );
};

export default Dashboard;
