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
          <p>Changle Plan</p>
          <Link to="/">
            <FontAwesomeIcon icon={faXmark} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default PurchaseNav;
