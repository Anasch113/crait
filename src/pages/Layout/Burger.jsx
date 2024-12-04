import { IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import "./styles/Burger.css";
import burg from "./burger.png";
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
          <img src={burg} alt="Home" />
          <p>Home</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/dashboard"
          onClick={() => {
            burgerOnOrOff(false);
            toSection("text-section");
          }}
        >
          <img src={burg} alt="Dashboard" />
          <p>Dashboard</p>
        </Link>
        <Link
          className="burger__row__item"
          to="/dashboard"
          onClick={() => {
            burgerOnOrOff(false);
            toSection("text-section");
          }}
        >
          <img src={burg} alt="Dashboard" />
          <p>Dashboard</p>
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
      </div>
    </div>
  );
}
export default Burger;
