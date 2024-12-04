import { IconMenu2 } from "@tabler/icons-react";
import "./styles/Nav.css";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import logo from "./Logo.png";

function Nav({ setArrowStyle, resetArrowStyle }) {
  function burgerOnOrOff(val) {
    if (val === false) {
      document.querySelector(".burger__container").style.display = "none";
    } else {
      document.querySelector(".burger__container").style.display = "block";
    }
  }

  function scrollToTextSection(e) {
    e.preventDefault(); 
    const target = document.querySelector(".text-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <nav>
        <div className="navbar">
          <Link to="/" className="nav__a">
            <img src={logo} alt="Craift logo" className="nav__logo" />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#text" onClick={scrollToTextSection}>
                Automate
              </a>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/documentation">Documentation</Link>
            </li>
          </ul>
          <span>
            <Link
              to="/dashboard"
              className="nav__button"
              onMouseOver={setArrowStyle("nav__arrow")}
              onMouseOut={resetArrowStyle("nav__arrow")}
            >
              Start Automating<span className="nav__arrow">→</span>
            </Link>
            <IconMenu2
              className="hamburger-menu"
              onClick={() => burgerOnOrOff(true)}
            />
          </span>
        </div>
      </nav>
      <div className="burger" id="burger">
        <Burger />
      </div>
    </>
  );
}

export default Nav;
