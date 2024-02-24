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
          <div className="purchase__left"></div>
          <div className="purchase__right">
            <p className="purchase__title">Choose a plan</p>
            <div className="purchase__pricing">
              <p className="purchase__price">Plan</p>
              <p className="purchase__price__des">
                For more details on our plans, visit our{" "}
                <Link to="/demo">demo page</Link>.
              </p>
            </div>
            <div className="purchase__box__container">
              <div className="purchase__box">
                <div className="purchase__box__left">
                  <div className="purchase__box__button__not"></div>
                  <div className="purchase__box__text">
                    <p className="purchase__box__title">
                      Starter - $0.00/month
                    </p>
                    <p className="purchase__box__des">
                      For personal, private projects.
                    </p>
                  </div>
                </div>
                <p className="purchase__box__right">CURRENT PLAN</p>
              </div>
            </div>
            <div className="purchase__box">
              <div className="purchase__box__left">
                <div className="purchase__box__button__not"></div>
                <div className="purchase__box__text">
                  <p className="purchase__box__title2">Pro - $15.00/month</p>
                  <p className="purchase__box__des2">
                  For pro developers and production projects
                  </p>
                </div>
              </div>
              <p className="purchase__box__right2">1 MONTH FREE TRIAL</p>
            </div>
            <div className="purchase__box">
              <div className="purchase__box__left">
                <div className="purchase__box__button__not"></div>
                <div className="purchase__box__text">
                  <p className="purchase__box__title">Corporation - $15.00/month per member</p>
                  <p className="purchase__box__des">
                    For teams that need 24/7 support.
                  </p>
                </div>
              </div>
              <p className="purchase__box__right">COMING SOON</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PurchaseMain;
