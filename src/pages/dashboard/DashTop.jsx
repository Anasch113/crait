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
                ? "Account Settings"
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
              onClick={() => setCategory("one")}
            >
              Invest
            </p>
            {purchase ? (
              <>
                <p
                  className={
                    purchase && category === "two"
                      ? "dashtop__options__allowed"
                      : "dashtop__options__not"
                  }
                  onClick={purchase ? () => setCategory("two") : undefined}
                >
                  Members
                </p>
                <Link
                  to={"/terms"}
                  className={
                    purchase ? "dashtop__options__not" : "dashtop__options__not"
                  }
                >
                  Support
                </Link>
              </>
            ) : (
              ""
            )}

            <p
              className={
                category === "four"
                  ? "dashtop__options__allowed"
                  : "dashtop__options__not"
              }
              onClick={() => setCategory("four")}
            >
              Account
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashTop;
