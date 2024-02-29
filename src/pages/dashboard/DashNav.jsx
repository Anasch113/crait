import React, { useEffect, useState } from "react";
import "./styles/DashNav.css";
import logo from "./images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faRightFromBracket,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

function DashNav({ avatar }) {
  const navigate = useNavigate();
  const [dropdown, setDropDown] = useState(false);
  useEffect(() => {
    if (dropdown === true) {
      document.querySelector(".dropdown").style.display = "block";
    } else {
      document.querySelector(".dropdown").style.display = "none";
    }
  }, [dropdown]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/login");
        return;
      })
      .catch((error) => {
        return;
      });
  };
  return (
    <>
      <nav className="dashnav" id="dashNav">
        <div className="dashnav__container">
          <div className="dashnav__left">
            <div className="dashnav__left__logo">
              <img src={logo} alt="YouCoin Logo" />
              <Link to="/" className="dashnav__left__logo__name">
                YouCoin
              </Link>
              <p className="dashnav__beta">BETA</p>
            </div>
          </div>
          <div className="dashnav__right">
            <Link to="/purchase" className="dashnav__button">
              Purchase
            </Link>
            <div className="dashnav__right__container">
              <div
                className="dashnav__right__flex"
                onClick={() => setDropDown(!dropdown)}
              >
                <img src={avatar} alt="Avatar" />
                <div className="dashnav__right__info">
                  <p className="dashnav__right__name"></p>
                  <p className="dashnav__right__type">All Investments</p>
                </div>
                <FontAwesomeIcon
                  icon={dropdown ? faAngleUp : faAngleDown}
                  className="dashnav__drop"
                  onClick={() => setDropDown(!dropdown)}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="dropdown__div">
        <div className="dropdown">
          <div className="dropdown__item" onClick={handleSignOut}>
            <p>Sign Out</p>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashNav;
