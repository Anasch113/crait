import { IconMenu2, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import "./styles/Burger.css";
import octagon from './images/octagon.png'
import multi from './images/multi.png'
import crate from './images/crate.png'
import doc from './images/doc.png'
import flag2 from './images/flag2.png'
import tool from './images/tool.png'
import comment from './images/comment.png'
import light from './images/light.png'
import pop from './images/pop.png'
import speed from './images/speed.png'
import flag from './images/flag.png'
import wash from './images/wash.png'
import eagle from './images/eagle.png'
import arm from './images/arm.png'
import basket from './images/basket.png'
import ship from './images/ship.png'
import brow from './images/brow.png'
function Burger({ burgerOnOrOff, toSection }) {
  return (
    <div className="burger__container">
      <div className="burger__top__container">
        <p>PAGES</p>
        <div onClick={() => { document.querySelector('.burger__container').style.display = 'none'}}>
          <IconX
            className="close-mobile"
            
          />
        </div>
      </div>
      <div className="burger__grid">
        <Link
          className="burger__row__item"
          to="/"
          onClick={() => {burgerOnOrOff(false)
          toSection("hero-section")}
        }
        >
          <img
            src={octagon}
            alt="YouCoin Home"
          />
          <p>Home</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => {burgerOnOrOff(false)
          toSection("text-section")}}
        >
          <img
            src={multi}
            alt="YouCoin Market"
          />
          <p>Prices</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/services"
          onClick={() => {burgerOnOrOff(false)
          toSection("join-section")}
        }
        >
          <img
            src={crate}
            alt="YouCoin Contact"
          />
          <p>Services</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={doc}
            alt="YouCoin Book Demo"
          />
          <p>Book Demo</p>
        </Link>
      </div>
      <div className="burger__top__container">
        <p className="burger__title">RESOURCES</p>
      </div>
      <div className="burger__grid">
        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)
        }
        >
          <img
            src={flag2}
            alt="YouCoin About"
          />
          <p>About Us</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/terms"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={tool}
            alt="YouCoin TOS"
          />
          <p>Terms Of Service</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={doc}
            alt="YouCoin Guides"
          />
          <p>Guides</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={comment}
            alt="YouCoin Blog"
          />
          <p>Blog</p>
        </Link>
      </div>
      <div className="burger__top__container">
        <p className="burger__title">FAQ</p>
      </div>
      <div className="burger__grid">
        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={light}
            alt="YouCoin Engine"
          />
          <p>YouCoin Engine</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={pop}
            alt="YouCoin Demo"
          />
          <p>Custom Demos</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={comment}
            alt="YouCoin Contact"
          />
          <p>Contact & Enquire</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/demo"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={speed}
            alt="YouCoin Test & Evalutation"
          />
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
          <img
            src={flag}
            alt="USA Defence"
          />
          <p>Defense</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={wash}
            alt="USA Federal"
          />
          <p>Federal</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={eagle}
            alt="USA Public Sector"
          />
          <p>Public Sector</p>
        </Link>
      </div>
      <div className="burger__top__container buger__lower">
        <p className="burger__title">SOLUTIONS</p>
      </div>
      <div className="burger__grid buger__lower">
        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={ship}
            alt="Logistics"
          />
          <p>Logistics</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={arm}
            alt="Robotics"
          />
          <p>Robotics</p>
        </Link>

        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={basket}
            alt="Retail & eCommerce"
          />
          <p>Retail & eCommerce</p>
        </Link>
        <Link
          className="burger__row__item"
          to="/"
          onClick={() => burgerOnOrOff(false)}
        >
          <img
            src={brow}
            alt="Content & Languages"
          />
          <p>Content & Languages</p>
        </Link>
      </div>
    </div>
  );
}
export default Burger;
