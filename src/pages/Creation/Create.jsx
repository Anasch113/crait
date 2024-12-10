import React, { useState } from "react";
import "./styles/Create.css";
import { FaX } from "react-icons/fa6";
import axios from "axios";



const Create = ({ onClose, onSubmit }) => {


  const [name, setName] = useState("");
  const [twitter, setTwitter] = useState("");
  const [age, setAge] = useState("");
  const [personality, setPersonality] = useState("");
  const [prompt, setPrompt] = useState("");





  const handleCreate = () => {

    const newAgent = {
      name,
      twitter,
      age,
      personality,
      prompt,
      date: new Date().toLocaleDateString(),
    };

    onSubmit(newAgent);
    setName("");
    setTwitter("");
    setAge("");
    setPersonality("");
    setPrompt("");
  };

  const handleClose = () => {
    setName("");
    setTwitter("");
    setAge("");
    setPersonality("");
    setPrompt("");
    onClose();
  };


  


  return (
    <div className="create">
      <FaX className="create-close" onClick={handleClose} />
      <h3>Create New Agent</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(

          )
        }}
      >
        <div className="create-flex">
          <div>
            <label htmlFor="create-name" className="create-label">
              Agent Name*
            </label>
            <input
              type="text"
              className="create-intext"
              id="create-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="create-twitter" className="create-label">
              Twitter @*
            </label>
            <input
              type="text"
              className="create-intext"
              id="create-twitter"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="create-flex2">
          <div>
            <label htmlFor="create-age" className="create-label">
              Agent Age*
            </label>
            <input
              type="number"
              className="create-intext"
              id="create-age"
              value={age}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 3) {
                  setAge(value.replace(/[^0-9]/g, ""));
                }
              }}
              step="1"
              min="0"
              required
            />
          </div>

          <div>
            <label htmlFor="create-personality" className="create-label">
              Personality*
            </label>
            <input
              type="text"
              className="create-intext"
              id="create-personality"
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="create-div">
          <label htmlFor="create-prompt" className="manage-label">
            Prompt*
          </label>
          <textarea
            id="create-prompt"
            className="manage-inarea"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="create-submit-div">
          <p className="create-twitter">Connect Twitter</p>
          <button type="submit" className="create-submit-button">
            Create Agent
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
