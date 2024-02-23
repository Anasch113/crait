import React from "react";
import "./styles/DashFooter.css";
import { Link } from "react-router-dom";
function DashFooter() {
  return (
    <footer className="dashfooter" id="dashfooter">
      <div className="dashfooter__container">
        <div className="dashfooter__left">
          <p>ⓒ 2024 YouCoin. All rights reserved.</p>
        </div>
        <div className="dashfooter__right">
          <Link to="/">Home</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/terms">Privacy</Link>

          <Link to="/demo" className="dashfooter__span">
            Book
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default DashFooter;
