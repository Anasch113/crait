import React from "react";
import "./styles/Hero.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

function Hero({ setArrowStyle, resetArrowStyle, toSection }) {
  return (
    <header>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero__content__text">
            <h1>
              Introducing{" "}
              <span>
                <TypeAnimation
                  sequence={["Automated AI", 1000]}
                  wrapper="span"
                  speed={20}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </span>
              <br />
              Investments
            </h1>
            <p>
              Make the best on your investments with YouCoin's advanced AI
              technology. Our AI ensures a safer investment experience by
              optimizing your information.
            </p>
            <div className="hero__arrow__buttons">
              <Link to="/demo"
                onMouseOver={setArrowStyle("hero__invest__arrow")}
                onMouseOut={resetArrowStyle("hero__invest__arrow")}
              >
                Book a Demo <span className="hero__invest__arrow">→</span>
              </Link>
              <p
                onClick={() => toSection("text-section")}
                onMouseOver={setArrowStyle("hero__AI__arrow")}
                onMouseOut={resetArrowStyle("hero__AI__arrow")}
              >
                Explore <span className="hero__AI__arrow">→</span>
              </p>
            </div>
          </div>
          <div className="hero__content__coins"></div>
          <p className="hero__info">
            YouCoin works with{" "}
            <a href="https://www.coingecko.com" target="_blank">
              CoinGecko API
            </a>
            , <a>US Law</a>, <a>Enterprises & Startups</a>
          </p>
        </div>
      </section>
    </header>
  );
}

export default Hero;
