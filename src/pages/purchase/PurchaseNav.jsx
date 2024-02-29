import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./styles/PurchaseNav.css";
function PurchaseNav() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="purchasenav" id="purchasenav">
        <div className="purchasenav__container">
          <p>Change plan</p>
          <button onClick={''}>
            <FontAwesomeIcon icon={faXmark} className="purchasenav__close" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default PurchaseNav;
