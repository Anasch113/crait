import React from "react";
import "./styles/dashfour.css";
import { activeUser } from "../firebase/firebase";
function DashFour({ avatar }) {
  return (
    <div className="dashfour" id="dashfour">
      <div className="dashfour__container">
        <div className="dashfour__flex">
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
                  <img src={avatar} alt="Avatar" />
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
          <div className="dashfour__del">
            <div className="dashfour__div__container">
              <div className="dashfour__top">
                <div className="dashfour__left">
                  <p className="dashfour__delete__title">Delete Account</p>
                  <p className="dashfour__left__des">
                    By clicking this button your account will be deleted and any
                    and all data will be removed from our database.
                  </p>
                </div>
                <div className="dashfour__image">
                  <img src={avatar} alt="Avatar" />
                  <p className="capitalize">
                    {activeUser.firstName} {activeUser.lastName}
                  </p>
                </div>
              </div>
              <div className="dashfour__bottom">
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashFour;
