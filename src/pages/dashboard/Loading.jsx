import React from "react";
import "./styles/Loading.css";
import Dashboard from "./Dashboard";
function Loading() {
  return (
    <>
          <div className="spinner"></div>
          <div className="loading__opacity">
            <div className="loading__div">
              <nav className="dashnav" id="dashNav">
                <div className="dashnav__container">
                  <div className="dashnav__left">
                    <div className="dashnav__left__logo"></div>
                  </div>
                  <div className="dashnav__right">
                    <div className="dashnav__right__container">
                      <div className="dashnav__right__flex">
                        <div className="dashnav__right__info">
                          <p className="dashnav__right__name capitalize"></p>

                          <p className="dashnav__right__type"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <section className="dashtop" id="dashtop">
                <div className="dashtop__container">
                  <div className="dashtop__top">
                    <div className="dashtop__left">
                      <p className="dashtop__title"></p>
                    </div>
                    <div className="dashtop__right"></div>
                  </div>
                  <div className="dashtop__bottom">
                    <div className="dashtop__options">
                      <p></p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="dashbottom" id="dashbottom">
                <div className="dash__content">
                  <div className="dashbottom__container">
                    <div className="dashbottom__one">
                      <p></p>
                    </div>
                    <div className="dashbottom__two">
                      <div className="dashbottom__box">
                        <div className="dashbottom__box__text">
                          <span></span>
                          <p></p>
                        </div>
                        <p className="dashbottom__box__location"></p>
                      </div>
                      <div className="dashbottom__box">
                        <div className="dashbottom__box__text">
                          <span></span>
                          <p></p>
                        </div>
                        <p className="dashbottom__box__location"></p>
                      </div>
                    </div>
                    <div className="dashbottom__three">
                      <div className="dashbottom__three__options">
                        <div className="dashbottom__option">
                          <p></p>
                        </div>
                        <div className="dashbottom__option">
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="dash__filler"></div>
            </div>
          </div>
        </>
       
  );
}

export default Loading;
