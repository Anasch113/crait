import React from "react";
import "./styles/Join.css";
import { Link } from "react-router-dom";

function Join() {
  return (
    <>
      <section id="join" className="join-section">
        <div className="join__content">
          <div className="join__content__text">
            <h1>
              The future of automation <br /> <span>Begins here.</span>
            </h1>
            <div className="join__buttons">
              <Link to="/dashboard">Automate Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Join;
