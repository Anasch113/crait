import React from "react";
import { FaUsers, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/Nav.css";
import logo from "./logo2.png";

const Nav = ({ activeSubject, onNavClick }) => {
  return (
    <nav className="dashboard-nav">
      <div className="dash-nav__logo">
        <img src={logo} alt="Craift Logo" />
        <p>Craift</p>
      </div>
      <div className="nav-section">
        <p className="nav-title">MENU</p>
        <ul className="nav-links">
          <li
            className={activeSubject === "AI Agents" ? "active" : ""}
            onClick={() => onNavClick("AI Agents")}
          >
            <FaUsers className="nav-icon" />
            AI Agents
          </li>
          <li
            className={activeSubject === "Create AI Agent" ? "active" : ""}
            onClick={() => onNavClick("Create AI Agent")}
          >
            <FaPlus className="nav-icon" />
            Create AI Agent
          </li>
        </ul>
      </div>

      <div className="nav-footer">
        <Link to="/">Return Home</Link>
      </div>
    </nav>
  );
};

export default Nav;
