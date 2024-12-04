import React from "react";
import "./styles/Hero.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

function Hero({ setArrowStyle, resetArrowStyle }) {
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
              Creation
            </h1>
            <p>
              Maximize your potential with Crait's LLM creation. Crait ensures a
              smarter and safer experience by optimizing and empowering your
              creations.
            </p>
            <div className="hero__buttons">
              <Link
                to="/documentation"
                onMouseOver={() => setArrowStyle("hero__invest__arrow")}
                onMouseOut={() => resetArrowStyle("hero__invest__arrow")}
              >
                Documentation
              </Link>
              <Link
                to="/dashboard"
                onMouseOver={() => setArrowStyle("hero__invest__arrow")}
                onMouseOut={() => resetArrowStyle("hero__invest__arrow")}
              >
                Automate Now
              </Link>
            </div>
          </div>
          <p className="hero__info">
            Crait provides a custom LLM that can be used on X.
          </p>
        </div>
      </section>
    </header>
  );
}

export default Hero;
