import React, { useState } from "react";
import "./styles/topdash.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { purchase } from "../firebase/firebase";
import { Link } from "react-router-dom";
function DashTop({ avatar, setCategory, category }) {
  return (
    <section className="dashtop" id="dashtop">
      <div className="dashtop__container">
        <div className="dashtop__top">
          <div className="dashtop__left">
            <p className="dashtop__title">
              {category === "one"
                ? "Personal Investments"
                : category === "two"
                ? "Current Members"
                : category === "four"
                ? "Current Members"
                : ""}
            </p>
            <p className="dashtop__free">{purchase ? "PRO" : "FREE"}</p>
          </div>
          <div className="dashtop__right">
            <img src={avatar} alt="Avatar" />
            <button className="dashtop__button">
              <FontAwesomeIcon icon={faPlus} />
              <span>Invite</span>
            </button>
          </div>
        </div>
        <div className="dashtop__bottom">
          <div className="dashtop__options">
            <p
              className={
                category === "one"
                  ? "dashtop__options__allowed"
                  : "dashtop__options__not"
              }
              onClick={purchase ? () => setCategory("one") : undefined}
            >
              Invest
            </p>
            <p
              className={
                purchase && category === "two"
                  ? "dashtop__options__allowed"
                  : purchase
                  ? "dashtop__options__not"
                  : "dashtop__options__not purchase__not__allowed"
              }
              onClick={purchase ? () => setCategory("two") : undefined}
            >
              Members
            </p>
            <Link
              to={purchase ? "/terms" : ""}
              className={
                purchase
                  ? "dashtop__options__not"
                  : "dashtop__options__not purchase__not__allowed"
              }
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashTop;
