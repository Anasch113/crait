import React, { useState, useEffect } from "react";
import "./styles/Agents.css";
import Create from "./Create";
import { FaX } from "react-icons/fa6";
import { ref, set, get } from "firebase/database";
import { database } from "../../firebase";
const Agents = ({
  walletAddress,
  balance,
  isDiconnect
}) => {
  const [agents, setAgents] = useState([]);
  const [currentAgent, setCurrentAgent] = useState(null);
  const [updatedAgent, setUpdatedAgent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showCreatePopup, setShowCreatePopup] = useState(false);

  const handleManageClick = (agent) => {
    setCurrentAgent(agent);
    setUpdatedAgent(agent);
    setShowPopup(true);
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

  const handleUpdate = () => {
    if (JSON.stringify(currentAgent) !== JSON.stringify(updatedAgent)) {
      setAgents((prevAgents) =>
        prevAgents.map((agent) =>
          agent === currentAgent ? updatedAgent : agent
        )
      );
      setCurrentAgent(updatedAgent);
      setShowPopup(false);
    }
  };

  const handleDelete = () => {
    setAgents((prevAgents) =>
      prevAgents.filter((agent) => agent !== currentAgent)
    );
    setShowPopup(false);
    setConfirmDelete(false);
  };

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

  console.log("is disconnect", isDiconnect)
  return (
    <>
      {agents.length > 0 ? (
        <>
          {showPopup && (
            <div className="agents-manage">
              <FaX className="agents-close" onClick={handleClosePopup} />
              <h3>Your Agent</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdate();
                }}
              >
                <div className="agents-manage-flex">
                  <div>
                    <label htmlFor="manage-name" className="manage-label">
                      Agent Name*
                    </label>
                    <input
                      type="text"
                      className="manage-intext"
                      id="manage-name"
                      value={updatedAgent?.name || ""}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="manage-twitter" className="manage-label">
                      Twitter*
                    </label>
                    <input
                      type="text"
                      className="manage-intext"
                      id="manage-twitter"
                      readOnly
                      value={updatedAgent?.twitter || ""}
                    />
                  </div>
                </div>
                <div className="agents-manage-flex2">
                  <div>
                    <label htmlFor="manage-age" className="manage-label">
                      Agent Age*
                    </label>
                    <input
                      type="number"
                      className="manage-intext"
                      id="manage-age"
                      value={updatedAgent?.age || ""}
                      onChange={(e) =>
                        handleInputChange(
                          "age",
                          e.target.value.replace(/[^0-9]/g, "")
                        )
                      }
                      step="1"
                      min="0"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="manage-personality"
                      className="manage-label"
                    >
                      Personality*
                    </label>
                    <input
                      type="text"
                      className="manage-intext"
                      id="manage-personality"
                      value={updatedAgent?.personality || ""}
                      onChange={(e) =>
                        handleInputChange("personality", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="manage-text-div">
                  <label htmlFor="manage-prompt" className="manage-label">
                    Prompt*
                  </label>
                  <textarea
                    id="manage-prompt"
                    className="manage-inarea"
                    value={updatedAgent?.prompt || ""}
                    onChange={(e) =>
                      handleInputChange("prompt", e.target.value)
                    }
                  ></textarea>
                </div>

                {confirmDelete ? (
                  <div>
                    <p className="confirm-text">
                      Are you sure you want to delete this agent?
                    </p>
                    <div className="confirm-buttons">
                      <button
                        type="button"
                        className="confirm-button confirm-yes"
                        onClick={handleDelete}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        className="confirm-button confirm-no"
                        onClick={handleCancelDelete}
                      >
                        No
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="manage-button-div">
                    <button
                      type="button"
                      className="manage-button manage-delete"
                      onClick={() => setConfirmDelete(true)}
                    >
                      Delete
                    </button>
                    <button
                      type="submit"
                      className="manage-button manage-update"
                    >
                      Update
                    </button>
                  </div>
                )}
              </form>
            </div>
          )}

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
                  onClick={() => handleManageClick(agent)}
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
            onClick={() => setShowCreatePopup(true)}
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
