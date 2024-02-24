import React, { useState } from "react";
import "./styles/PurchaseMain.css";
import { Link } from "react-router-dom";
function PurchaseMain() {
  const [next, setNext] = useState(false);
  return (
    <>
      <section className="purchase" id="purchase">
        <div className="purchase__container">
          <div className="purchase__left">
            <div className="purchase__left__content">
              <div className="purchase__left__events">
                <div className="purchase__left__item">
                  <div className="purchase__left__button__full purchase__left__button__full2">
                    <div className="purchase__left__button__inside"></div>
                  </div>
                  <p>Plans</p>
                </div>
                <div className="purchase__left__divider"></div>
                <div className="purchase__left__item">
                  <div
                    className={
                      next
                        ? "purchase__left__button__full purchase__left__button__full2"
                        : "purchase__left__button__full"
                    }
                  >
                    {next ? (
                      <div className="purchase__left__button__inside"></div>
                    ) : (
                      ""
                    )}
                  </div>
                  <p>Account</p>
                </div>
                <div className="purchase__left__divider"></div>

                <div className="purchase__left__item">
                  <div
                    className={
                      next
                        ? "purchase__left__button__full purchase__left__button__full2"
                        : "purchase__left__button__full"
                    }
                  >
                    {next ? (
                      <div className="purchase__left__button__inside"></div>
                    ) : (
                      ""
                    )}
                  </div>
                  <p>Pricing</p>
                </div>
                <div className="purchase__left__divider"></div>
                <div className="purchase__left__item">
                  <div
                    className={
                      next
                        ? "purchase__left__button__full purchase__left__button__full2"
                        : "purchase__left__button__full"
                    }
                  >
                    {next ? (
                      <div className="purchase__left__button__inside"></div>
                    ) : (
                      ""
                    )}
                  </div>
                  <p>Terms</p>
                </div>
                <div className="purchase__left__divider"></div>
                <div className="purchase__left__item">
                  <div
                    className={
                      next
                        ? "purchase__left__button__full purchase__left__button__full2"
                        : "purchase__left__button__full"
                    }
                  >
                    {next ? (
                      <div className="purchase__left__button__inside"></div>
                    ) : (
                      ""
                    )}
                  </div>
                  <p>Demo</p>
                </div>
                <div className="purchase__left__divider"></div>
                <div className="purchase__left__item">
                  <div className="purchase__left__button__full"></div>
                  <p>Review</p>
                </div>
              </div>
            </div>
          </div>
          <div className="purchase__right">
            <div className="purchase__right__container">
              <div className="purchase__right__content">
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
                          For personal, private use.
                        </p>
                      </div>
                    </div>
                    <p className="purchase__box__right">CURRENT PLAN</p>
                  </div>

                  <div className="purchase__box purchase__box2">
                    <div className="purchase__box__left">
                      <div className="purchase__box__button__sel"></div>
                      <div className="purchase__box__text">
                        <p className="purchase__box__title2">
                          Pro - $15.00/month
                        </p>
                        <p className="purchase__box__des2">
                          Made for proffesionals to invest.
                        </p>
                      </div>
                    </div>
                    <p className="purchase__box__right2">1 MONTH FREE TRIAL</p>
                  </div>
                  <div className="purchase__box">
                    <div className="purchase__box__left">
                      <div className="purchase__box__button__not"></div>
                      <div className="purchase__box__text">
                        <p className="purchase__box__title">
                          Corporation - $15.00/month per member
                        </p>
                        <p className="purchase__box__des">
                          For teams that need 24/7 support.
                        </p>
                      </div>
                    </div>
                    <p className="purchase__box__right">COMING SOON</p>
                  </div>
                </div>
                <div className="purchase__buttons__div">
                  <Link to="/" className="purchase__button__cancel">
                    Cancel
                  </Link>
                  <button
                    className="purchase__button__next"
                    onClick={() => setNext(true)}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PurchaseMain;
