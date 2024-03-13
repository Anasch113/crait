import "./styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faCircleQuestion,
  faCalendar,
  faBolt,
  faCreditCard
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Join from "../Home/Join";
import light from '../images/light.png'
import cir from '../images/cir.png'
import data from '../images/data.png'
import octo from '../images/octo.png'
function Services({ setArrowStyle, resetArrowStyle }) {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__content">
          <div className="services__title">
            <h2>Services</h2>
            <p>Discover The Power AI With YouCoin</p>
          </div>
          <div className="services__box">
            <div className="services___box__left">
              <div className="service__box__topic">
                <h3>Consulting & Guidance</h3>
                <p>Ideal stategies for investments.</p>
              </div>
              <div className="service__box__container">
                <div className="service__box__reasons">
                  <FontAwesomeIcon icon={faTag} rotation={90} />
                  <p>Sustainable prices.</p>
                </div>
                <div className="service__box__reasons">
                  <FontAwesomeIcon icon={faCalendar} />
                  <p>
                    Gain Access to meeting and conferences.{" "}
                  </p>
                </div>
                <div className="service__box__reasons">
                  <FontAwesomeIcon icon={faCircleQuestion} />
                  <p>Dedicated customer operations support.</p>
                </div>
              </div>
            </div>
            <div className="services___box__right">
              <div className="service__right__div">
                <img
                  src={light}
                  alt="Lighting Bolt"
                />
                <div className="service__right__content">
                  <h3 className="service__right__title">
                    YouCoin Data Collection
                  </h3>
                  <p>
                    YouCoin provides past and present date for crypto currencies.
                  </p>
                  <Link
                    to="/demo"
                    onMouseOver={setArrowStyle("hero__invest__arrow")}
                    onMouseOut={resetArrowStyle("hero__invest__arrow")}
                  >
                    Book a Demo<span className="hero__invest__arrow">→</span>
                  </Link>
                </div>
              </div>
              <div className="service__right__div">
                <img
                  src={octo}
                  alt="Colorful circle"
                />
                <div className="service__right__content">
                  <h3 className="service__right__title">
                    YouCoin AI Intelligence
                  </h3>
                  <p>
                    Our AI is trained using a knowledge of crypto from 01/26/2018.
                  </p>
                  <Link
                    to="/demo"
                    onMouseOver={setArrowStyle("service__arrow_1")}
                    onMouseOut={resetArrowStyle("service__arrow_1")}
                  >
                    Book a Demo<span className="service__arrow_1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="services__box">
            <div className="services___box__left">
              <div className="service__box__topic">
                <h3>Short & Long Term</h3>
                <p>Strategies for the most ideal results.</p>
              </div>
              <div className="service__box__container">
                <div className="service__box__reasons">
                  <FontAwesomeIcon icon={faTag} rotation={90} />
                  <p>Annotate and manage data for your investments.</p>
                </div>
                <div className="service__box__reasons">
                <FontAwesomeIcon icon={faBolt} />
                  <p>
                  Optimize to yourself either short or long term.
                  </p>
                </div>
                <div className="service__box__reasons">
                <FontAwesomeIcon icon={faCreditCard} />
                  <p>Pay as you go via credit card.</p>
                </div>
              </div>
            </div>
            <div className="services___box__right">
              <div className="service__right__div">
                <img
                  src={data}
                  alt="Colorfull Database"
                />
                <div className="service__right__content">
                  <h3 className="service__right__title">
                    Data Management
                  </h3>
                  <p>
                  Collect and manage all of your data with out data management.
                  </p>
                  <Link
                    to="/demo"
                    onMouseOver={setArrowStyle("service__arrow_2")}
                    onMouseOut={resetArrowStyle("service__arrow_2")}
                  >
                    Book a Demo<span className="service__arrow_2">→</span>
                  </Link>
                </div>
              </div>
              <div className="service__right__div">
                <img
                  src={cir}
                  alt="Colorfull Octagon"
                />
                <div className="service__right__content">
                  <h3 className="service__right__title">
                    Organization Bonus
                  </h3>
                  <p>
                  Receive complimentary guidance on up to $10,000.
                  </p>
                  <Link
                    to="/demo"
                    onMouseOver={setArrowStyle("service__arrow_3")}
                    onMouseOut={resetArrowStyle("service__arrow_3")}
                  >
                    Book a Demo<span className="service__arrow_3">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Join
            setArrowStyle={setArrowStyle}
            resetArrowStyle={resetArrowStyle}
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
