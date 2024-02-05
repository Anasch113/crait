import "./styles/Slider.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
function Slider({ toSection }) {
  return (
    <section id="slider" className="slider-section">
      <div className="slider__content">
        <div className="slider__grid">
          <Link to='/Terms' className="slider__1">
            <div className="slider__container__1">
              <div>
                <p className="slider__1__title"> Get back up to</p>
                <p className="sFlider__1__rewards">10%</p>
                <p className="slider__1__title">in annual crypto rewards</p>
              </div>
              <p className="slider__1__des">
                Earn up to 10% back on investments this year by holding
                cryptocurrencies.
              </p>
            </div>
          </Link>
          <Link to='/Terms' className="slider__2">
            <div className="slider__container__2">
              <div className="slider__text">
                <p className="slider__title">YouCoin Mobile App</p>{" "}
                <p className="slider__des">
                  One tap away from all of your crypto and assets.
                </p>
              </div>
            </div>
          </Link>
          <Link  to='/Terms' className="slider__3">
            <div className="slider__container__3">
              <div className="slider__text">
                <p className="slider__title">Immediately purchase</p>{" "}
                <p className="slider__des">
                  Embark on the journey of creating your ideal portfolio
                  effortlessly.
                </p>
              </div>
            </div>
          </Link>
          <Link to='/Terms' className="slider__4">
            <div className="slider__container__4">
              <div className="slider__text">
                <p className="slider__title">YouCoin Wallet</p>{" "}
                <p className="slider__des">
                  Securely and Safely Manage Your Portfolio.
                </p>
              </div>
            </div>
          </Link>
          <Link to='/Terms' className="slider__5">
            <div className="slider__container__5">
              <div className="slider__text">
                <p className="slider__title">Trade and Buy</p>{" "}
                <p className="slider__des">
                  Immerse yourself in abundant liquidity and trade with the
                  expertise of a professional.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to='/Terms' className="slider__1">
              <div className="slider__container__1">
                <div>
                  <p className="slider__1__title"> Get back up to</p>
                  <p className="slider__1__rewards">10%</p>
                  <p className="slider__1__title">in annual crypto rewards</p>
                </div>
                <p className="slider__1__des">
                  Earn up to 10% back on investments this year by holding
                  cryptocurrencies.
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='/Terms' className="slider__2">
              <div className="slider__container__2">
                <div className="slider__text">
                  <p className="slider__title">YouCoin Mobile App</p>{" "}
                  <p className="slider__des">
                    One tap away from all of your crypto and assets.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='/Terms' className="slider__3">
              <div className="slider__container__3">
                <div className="slider__text">
                  <p className="slider__title">Immediately purchase</p>{" "}
                  <p className="slider__des">
                    Embark on the journey of creating your ideal portfolio
                    effortlessly.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='/Terms' className="slider__4">
              <div className="slider__container__4">
                <div className="slider__text">
                  <p className="slider__title">YouCoin Wallet</p>{" "}
                  <p className="slider__des">
                    Securely and Safely Manage Your Portfolio.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='/Terms' className="slider__5">
              <div className="slider__container__5">
                <div className="slider__text">
                  <p className="slider__title">Trade and Buy</p>{" "}
                  <p className="slider__des">
                    Immerse yourself in abundant liquidity and trade with the
                    expertise of a professional.
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
