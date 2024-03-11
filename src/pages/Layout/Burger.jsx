import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import "./styles/Burger.css";
import octagon from "./images/octagon.png";
import multi from "./images/multi.png";
import crate from "./images/crate.png";
import doc from "./images/doc.png";
import flag2 from "./images/flag2.png";
import tool from "./images/tool.png";
import comment from "./images/comment.png";
import speed from "./images/speed.png";
import flag from "./images/flag.png";
import wash from "./images/wash.png";
import eagle from "./images/eagle.png";
import arm from "./images/arm.png";
import brow from "./images/brow.png";
function Burger({ burgerOnOrOff, toSection }) {
  return (
    <div className="burger__container">
      <div className="burger__top__container">
        <p>PAGES</p>
        <div
          onClick={() => {
            document.querySelector(".burger__container").style.display = "none";
          }}
        >
          <IconX className="close-mobile" />
        </div>
      </div>
      <div className="burger__grid">
        <Link
          className="burger__row__item"
          to="/"
          onClick={() => {
            burgerOnOrOff(false);
            toSection("hero-section");
          }}
        >
          <img src={octagon} alt="YouCoin Home" />
          <p>Home</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => {
            burgerOnOrOff(false);
            toSection("text-section");
          }}
        >
          <img src={multi} alt="YouCoin Market" />
          <p>Prices</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/services"
          onClick={() => {
            burgerOnOrOff(false);
            toSection("join-section");
          }}
        >
          <img src={crate} alt="YouCoin Contact" />
          <p>Services</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img src={doc} alt="YouCoin Book Demo" />
          <p>Book Demo</p>
        </Link>
        <Link
          className="burger__row__item"
          to="/dashboard"
          onClick={() => burgerOnOrOff(false)}
        >
          <img src={arm} alt="YouCoin Book Demo" />
          <p>Dashboard</p>
        </Link>
        <Link
          className="burger__row__item"
          to="/purchase"
          onClick={() => burgerOnOrOff(false)}
        >
          <img src={brow} alt="YouCoin Book Demo" />
          <p>Purchase</p>
        </Link>
      </div>
      <div className="burger__top__container">
        <p className="burger__title">RESOURCES</p>
      </div>
      <div className="burger__grid">
        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img src={flag2} alt="YouCoin About" />
          <p>About Us</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/terms"
          onClick={() => burgerOnOrOff(false)}
        >
          <img src={tool} alt="YouCoin TOS" />
          <p>Terms Of Service</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img src={doc} alt="YouCoin Guides" />
          <p>Guides</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img src={comment} alt="YouCoin Blog" />
          <p>Blog</p>
        </Link>
      </div>
      <div className="burger__top__container">
        <p className="burger__title">FAQ</p>
      </div>
      <div className="burger__grid">

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img src={comment} alt="YouCoin Contact" />
          <p>Contact & Enquire</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img src={speed} alt="YouCoin Test & Evalutation" />
          <p>Test & Evalutation</p>
        </Link>
      </div>

      <div className="burger__top__container buger__lower">
        <p className="burger__title">GOVERNMENT</p>
      </div>
      <div className="burger__grid buger__lower">
        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img src={flag} alt="USA Defence" />
          <p>Defense</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img src={wash} alt="USA Federal" />
          <p>Federal</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img src={eagle} alt="USA Public Sector" />
          <p>Public Sector</p>
        </Link>
      </div>
      <div className="burger__links">
        <Link
          to="/demo"
          className="burger__book"
          onClick={() => {
            burgerOnOrOff(false);
          }}
        >
          Book Demo
        </Link>
        <Link
          to="/login"
          className="burger__login"
          onClick={() => {
            burgerOnOrOff(false);
          }}
        >
          Log In
        </Link>
      </div>
    </div>
  );
}
export default Burger;
