import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./styles/PurchaseNav.css";
import { Link } from "react-router-dom";
function PurchaseNav() {
  return (
    <>
      <nav className="purchasenav" id="purchasenav">
        <div className="purchasenav__container">
          <p>Change plan</p>
          <Link to={`/dashboard`} >
            <FontAwesomeIcon icon={faXmark} className="purchasenav__close" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default PurchaseNav;
