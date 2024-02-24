import React from "react";
import "./styles/PurchaseMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function PurchaseMain() {
  return (
    <>
      <section className="purchase" id="purchase">
        <div className="purchase__container">
          <div className="purchase__left">
            <div className="purchase__left__content">
              <div className="purchase__left__flex">
                <div className="purchase__left__title">
                  <h3>YouCoin</h3>
                  <p>Create a YouCoin account and begin investing smart!</p>
                </div>
                <div className="purchase__box">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#000" }}
                    className="purchase__icon"
                  />
                  <div className="purchase__box__text">
                    <p className="purchase__box__title">
                      Apply Our AI Cryptocurrency
                    </p>
                    <p className="purchase__box__des">
                      Learn from your mistake with our AI
                    </p>
                    <p className="purchase__box__des">
                      Understand Uptrends in investing
                    </p>
                  </div>
                </div>
                <div className="purchase__box">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#000" }}
                    className="purchase__icon"
                  />
                  <div className="purchase__box__text">
                    <p className="purchase__box__title">
                      Use Automated investments
                    </p>
                    <p className="purchase__box__des">
                      Sit back and relax while our AI invest
                    </p>
                    <p className="purchase__box__des">
                      Learn what i feels like to do nothing
                    </p>
                  </div>
                </div>
                <div className="purchase__box">
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "#000" }}
                    className="purchase__icon"
                  />
                  <div className="purchase__box__text">
                    <p className="purchase__box__title">
                      Gain Access To Classes
                    </p>
                    <p className="purchase__box__des">
                      Instructors will guide you to learn the market
                    </p>
                    <p className="purchase__box__des">
                      Participate online lectures{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="purchase__right"></div>
        </div>
      </section>
    </>
  );
}

export default PurchaseMain;
