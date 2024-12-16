import React, { useState, useEffect } from "react";
import "./styles/Agents.css";
import Create from "./Create";

import { ref, set, get, update } from "firebase/database";
import { database } from "../../firebase";
import toast from "react-hot-toast";
import ManageAgent from "../../components/ManageAgent";
import Cookies from "js-cookie";

const Agents = ({
  walletAddress,
  balance,
  isDiconnect,
  twitterConnected
}) => {
  const [agents, setAgents] = useState([]);
  const [currentAgent, setCurrentAgent] = useState(null);
  const [updatedAgent, setUpdatedAgent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [agentId, setAgentId] = useState("");

  const handleManageClick = (agent, index) => {
    setCurrentAgent(agent);
    setUpdatedAgent(agent);
    setShowPopup(true);
    setAgentId(index)
  };

  const handleCreateClose = () => {
    setShowCreatePopup(false);
  };

  const handleCreateSubmit = async (newAgent) => {
    try {
      // Reference to the user's agents in Firebase
      const userAgentsRef = ref(database, `users/${walletAddress}/agents`);

      // Retrieve existing agents (if any) from Firebase
      const snapshot = await get(userAgentsRef);
      let agents = [];

      if (snapshot.exists()) {
        agents = snapshot.val(); // Get existing agents as an array
      }

      // Add the new agent to the agents array
      const updatedAgents = [...agents, newAgent];

      // Update the Firebase database with the new agents array
      await set(userAgentsRef, updatedAgents);

      console.log("New agent created and saved:", newAgent);
      console.log("Updated agents list:", updatedAgents);

      // Update the local state (if required)
      setAgents(updatedAgents);

      // Close the popup
      setShowCreatePopup(false);
    } catch (error) {
      console.error("Error saving agent to Firebase:", error);
    }
  };
  console.log("agent", agents)


  const handleInputChange = (field, value) => {
    setUpdatedAgent((prev) => ({ ...prev, [field]: value }));
  };

  // const handleUpdate = () => {

  //   if (JSON.stringify(currentAgent) !== JSON.stringify(updatedAgent)) {
  //     setAgents((prevAgents) =>
  //       prevAgents.map((agent) =>
  //         agent === currentAgent ? updatedAgent : agent
  //       )
  //     );
  //     setCurrentAgent(updatedAgent);
  //     setShowPopup(false);
  //   }
  // };

  // const handleDelete = () => {
  //   setAgents((prevAgents) =>
  //     prevAgents.filter((agent) => agent !== currentAgent)
  //   );
  //   setShowPopup(false);
  //   setConfirmDelete(false);
  // };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setConfirmDelete(false);
  };




  // Fetch agents from Firebase
  const fetchAgents = async () => {
    try {
      const userAgentsRef = ref(database, `users/${walletAddress}/agents`);
      const snapshot = await get(userAgentsRef);

      if (snapshot.exists()) {
        setAgents(snapshot.val()); // Update state with fetched agents
        console.log("Fetched agents:", snapshot.val());
      } else {
        console.log("No agents found for this wallet address.");
      }
    } catch (error) {
      console.error("Error fetching agents:", error);
    }
  };

  // Fetch agents when the component mounts or walletAddress changes
  useEffect(() => {
    if (walletAddress) {
      fetchAgents();
    }
  }, [walletAddress]);

  useEffect(() => {
    if (isDiconnect === true) {
      console.log("working........")
      setAgents([])
    }
  }, [isDiconnect, walletAddress])



  const handleUpdate = async () => {
    if (JSON.stringify(currentAgent) !== JSON.stringify(updatedAgent)) {

      try {

        setAgents((prevAgents) =>
          prevAgents.map((agent) =>
            agent === currentAgent ? updatedAgent : agent
          )
        );

        // Get the wallet address
        const userAddress = walletAddress;

        // Update agent in Firebase
        const agentIndex = agents.findIndex((agent) => agent === currentAgent);
        console.log("agent Index", agentIndex)

        if (agentIndex !== -1) {

          const agentRef = ref(
            database,
            `users/${userAddress}/agents/${agentIndex}`
          );

          await update(agentRef, updatedAgent);
          console.log("Agent updated successfully in Database");
        }

        // Update current agent in local state
        setCurrentAgent(updatedAgent);
        toast.success("Agent updated!")
        setShowPopup(false);
        // window.location.reload()
      } catch (error) {
        console.error("Failed to update agent:", error);
      }
    }
  };



  const handleDelete = async () => {
    try {
      // Get the wallet address
      const userAddress = walletAddress;

      // Find the agent index in the local state
      const agentIndex = agents.findIndex((agent) => agent === currentAgent);

      if (agentIndex !== -1) {

        const updatedAgents = agents.filter((_, index) => index !== agentIndex);
        setAgents(updatedAgents);


        const userAgentsRef = ref(database, `users/${userAddress}/agents`);
        await set(userAgentsRef, updatedAgents);

        console.log("Agent deleted successfully from Firebase");
        toast.success("Agent deleted")
        setShowPopup(false);
      } else {
        console.error("Agent not found");
      }
    } catch (error) {
      console.error("Failed to delete agent:", error);
    }
  };


  const handleCreateAgent = () => {
    if (!walletAddress) {
      toast("Please connect your wallet first")
    }
    else {
      setShowCreatePopup(true)
    }
  }
  console.log("agentId", agentId)


  const handleTwitterConnection = () => {
    Cookies.set("agentId", agentId, {expires: 0.1})
    const authUrl = `${import.meta.env.VITE_SERVER_HOST_URL}/twitter/auth`;
    window.open(authUrl, '_blank', 'noopener,noreferrer');
  };



  return (
    <>
      {agents.length > 0 ? (
        <>
          <ManageAgent

            showPopup={showPopup}
            handleClosePopup={handleClosePopup}
            handleUpdate={handleUpdate}
            handleInputChange={handleInputChange}
            updatedAgent={updatedAgent}
            confirmDelete={confirmDelete}
            handleDelete={handleDelete}
            handleCancelDelete={handleCancelDelete}
            setConfirmDelete={setConfirmDelete}
            agentId={agentId}
            walletAddress={walletAddress}
            handleTwitterConnection={handleTwitterConnection}
            twitterConnected={twitterConnected}

          />
          <div className="agents">
            <div className="agent-top">
              <p>Agent</p>
              <p>Date</p>
              <p>Twitter</p>
              <p>Manage</p>
            </div>

            {agents.map((agent, index) => (
              <div key={index} className="agent-item">
                <p className="agent-name">{agent.name}</p>
                <p className="agent-des">{agent.date}</p>
                <p className="agent-at">{agent.twitter}</p>
                <button
                  className="agent-manage"
                  onClick={() => handleManageClick(agent, index)}
                >
                  Manage
                </button>
              </div>
            ))}


          </div>

        </>
      ) : (
        <div className="agent-empty">
          <h2>No agents here yet</h2>
          <p>Start building your first AI agent to bring your ideas to life.</p>
          <button
            className="create-character-btn"
            onClick={handleCreateAgent}
          >
            Create AI Agent
          </button>
        </div>
      )}

      {showCreatePopup && (
        <div className="create-popup">
          <Create onClose={handleCreateClose} onSubmit={handleCreateSubmit} />
        </div>
      )}
    </>
  );
};

export default Agents;
