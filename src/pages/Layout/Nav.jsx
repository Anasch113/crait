import { IconMenu2, IconX } from "@tabler/icons-react";
import "./styles/Nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";

function Nav({ setArrowStyle, resetArrowStyle, toSection }) {
  function burgerOnOrOff(val) {
    if(val === false){
        document.querySelector('.burger__container').style.display = 'none'
    }else{
      document.querySelector('.burger__container').style.display = 'block'
    }
  }
  return (
    <>
      <nav>
        <div className="nav__intro">
          <img
            src="https://cdn.discordapp.com/attachments/1187219037537714220/1196572950921494539/logo-379817d2.png?ex=65b81e66&is=65a5a966&hm=5caf9f4ab5e702b6b816712dea1c23bc5cae948d7ee0bb47328fcf39c3691ffc&"
            alt="logo"
            width={25}
          />
          <p className="nav__intro__text">
            Introducing YouCoin’s Personally Automated Investments
            <span
              className="nav__intro__learnmore"
              onClick={() => toSection("market-section")}
              onMouseOver={setArrowStyle("nav__intro__arrow")}
              onMouseOut={resetArrowStyle("nav__intro__arrow")}
            >
              Learn More <span className="nav__intro__arrow">→</span>
            </span>
          </p>
        </div>

        <div className="navbar">
          <Link to="/">
            <p className="nav__name">YouCoin</p>
          </Link>
          <ul>
            <li onClick={() => toSection("hero-section")}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => toSection("text-section")}>
              <Link to="/">Prices</Link>
            </li>
            <li onClick={() => toSection("slider-section")}>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/terms">Contact</Link>
            </li>
          </ul>
          <span>
            <Link
              to="/demo"
              className="nav__button"
              onMouseOver={setArrowStyle("nav__arrow")}
              onMouseOut={resetArrowStyle("nav__arrow")}
            >
              Start Investing <span className="nav__arrow">→</span>
            </Link>

            <IconMenu2 className="hamburger-menu"  onClick={()=>burgerOnOrOff(true)}/>
          </span>
        </div>
      </nav>
      <div className="burger" id="burger"  burgerOnOrOff={burgerOnOrOff}>
        <Burger toSection={toSection} />
      </div>
    </>
  );
}

export default Nav;
