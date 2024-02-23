import React, { useState } from "react";
import "./styles/DashTop.css";
import initials from "./images/initials.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function DashTop() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <section className="dashtop" id="dashtop">
      <div className="dashtop__container">
        <div className="dashtop__top">
          <div className="dashtop__left">
            <p className="dashtop__title">Personal Investments</p>
            <p className="dashtop__free">FREE</p>
          </div>
          <div className="dashtop__right">
            <img src={initials} alt="Avatar" />
            <button
              className="dashtop__button"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <FontAwesomeIcon icon={faPlus} />
              <span>Invite</span>
            </button>
          </div>
        </div>
        <div className="dashtop__bottom">
          <div className="dashtop__options">
            <p className="dashtop__options__allowed">Invest</p>
            <p className="dashtop__options__not">Members</p>
            <p className="dashtop__options__not">Calls</p>
            <p className="dashtop__options__not">Billing</p>
            <p className="dashtop__options__not">Settings</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashTop;
