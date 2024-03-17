import React, { useEffect, useState } from "react";
import "./styles/DashNav.css";
import logo from "../images/dashlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faRightFromBracket,
  faAngleUp,
  faUser,
  faMoneyBillTrendUp,
  faPeopleGroup,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { auth, username, purchase } from "../firebase/firebase";
function DashNav({ setCategory }) {
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
            {purchase ? (
              ""
            ) : (
              <Link to="/purchase" className="dashnav__button">
                Purchase
              </Link>
            )}

            <div className="dashnav__right__container">
              <div
                className="dashnav__right__flex"
                onClick={() => setDropDown(!dropdown)}
              >
                <div className="dash__avatar">
                  <p className="capitalize dash__avatar__p">{username[0]}</p>
                </div>
                <div className="dashnav__right__info">
                  <p className="dashnav__right__name capitalize">{username}</p>

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
          <div
            className="dropdown__item"
            onClick={() => {
              setDropDown(!dropdown), setCategory("four");
            }}
          >
            <p>Account</p>
            <FontAwesomeIcon icon={faUser} />
          </div>
          {purchase ? (
            <>
              <div
                className="dropdown__item"
                onClick={() => {
                  setDropDown(!dropdown), setCategory("one");
                }}
              >
                <p>Invest</p>
                <FontAwesomeIcon icon={faMoneyBillTrendUp} />
              </div>
              <div
                className="dropdown__item"
                onClick={() => {
                  setDropDown(!dropdown), setCategory("two");
                }}
              >
                <p>Members</p>
                <FontAwesomeIcon icon={faPeopleGroup} />
              </div>

              <Link
                to="/terms"
                className="dropdown__item"
                onClick={() => {
                  setDropDown(!dropdown), setCategory("four");
                }}
              >
                <p>Support</p>
                <FontAwesomeIcon icon={faPhone} />
              </Link>
            </>
          ) : (
            ""
          )}

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
