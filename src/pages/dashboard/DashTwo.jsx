import React from "react";
import "./styles/dashtwo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { activeUser, username } from "../firebase/firebase";
function DashTwo() {
  return (
    <section className="dashtwo" id="dashtwo">
      <div className="dash__content">
        <div className="dashtwo__container">
          <div className="dashtwo__title">
            <div className="dashtwo__flex">
              <p>Members</p>
              <span>1/1 Members used</span>
            </div>
          </div>
          <div className="dashtwo__two">
            <div className="dashtwo__item__container">
              <div className="dashtwo__title__flex">
                <p>NAME</p>
                <p>EMAIL</p>
                <p>JOINED</p>
              </div>
            </div>
            <div className="dashtwo__item__container">
              <div className="dashtwo__title__flex">
                <div className="dashtwo__user__img">
                  <div className="dash__avatar">
                    <p className="capitalize dash__avatar__p">{username[0]}</p>
                  </div>
                  <p className="capitalize">
                    {activeUser.firstName} {activeUser.lastName}
                  </p>
                </div>
                <p className="capitalize">{activeUser.email}</p>
                <p>2024</p>
              </div>
            </div>
            <div className="dashtwo__item__container2">
              <div className="dashtwo__bottom">
                <p>Upgrade your plan to add members to your organization</p>
                <button>Upgrade plan</button>
              </div>
            </div>
          </div>
          <div className="dashtwo__three">
            <button className="dashbottom__selector">
              1
              <FontAwesomeIcon
                icon={faAngleDown}
                className="dashbottom__icon"
              />
            </button>
            <div className="dashbottom__three__options">
              <div className="dashbottom__option">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="dashbottom__icon"
                />
                <p>Prev</p>
              </div>
              <button disabled>1</button>
              <div className="dashbottom__option">
                <p>Next</p>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="dashbottom__icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashTwo;
