import { IconMenu2, IconX } from "@tabler/icons-react";
import "./styles/Nav.css";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import logo from "./images/logo.png";

function Nav({ setArrowStyle, resetArrowStyle, toSection, signedin }) {

  function burgerOnOrOff(val) {
    if (val === false) {
      document.querySelector(".burger__container").style.display = "none";
    } else {
      document.querySelector(".burger__container").style.display = "block";
    }
  }
  return (
    <>
      <nav>
        <div className="nav__intro">
          <img src={logo} alt="logo" width={25} />
          <p className="nav__intro__text">
            Introducing YouCoin’s Personally Automated Investments
            <Link
            to='/services'
              className="nav__intro__learnmore"
              onClick={() => toSection("market-section")}
              onMouseOver={setArrowStyle("nav__intro__arrow")}
              onMouseOut={resetArrowStyle("nav__intro__arrow")}
            >
              Learn More <span className="nav__intro__arrow">→</span>
            </Link>
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
              Start Investing<span className="nav__arrow">→</span>
            </Link>
            <Link to={signedin? "/dashboard" : '/login'} className="nav__login">
              {signedin? "Dashboard" : 'Log In'}
            </Link>
            <IconMenu2
              className="hamburger-menu"
              onClick={() => burgerOnOrOff(true)}
            />
          </span>
        </div>
      </nav>
      <div className="burger" id="burger">
        <Burger toSection={toSection} />
      </div>
    </>
  );
}

export default Nav;
