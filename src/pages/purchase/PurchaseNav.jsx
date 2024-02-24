import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./styles/PurchaseNav.css";
function PurchaseNav() {
  return (
    <>
      <nav className="purchasenav" id="purchasenav">
        <div className="purchasenav__container">
          <p>Change Plan</p>
          <Link to="/">
            <FontAwesomeIcon icon={faXmark} className="purchasenav__close"/>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default PurchaseNav;
