import React from "react";
import "./styles/Smaller.css";
import { Link } from "react-router-dom";
const Smaller = () => {
  return (
    <div className="smaller">
      <p>
        This page is not available on smaller screens. Please switch to a device
        with a larger screen for the best experience.
      </p>
      <Link to='/' className="smaller-return">Return Home</Link>
    </div>
  );
};

export default Smaller;
