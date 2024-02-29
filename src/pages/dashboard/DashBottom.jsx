import React from "react";
import "./styles/bottomdash.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronLeft,
  faChevronRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function DashBottom() {
  return (
    <section className="dashbottom" id="dashbottom">
      <div className="dash__content">
        <div className="dashbottom__container">
          <div className="dashbottom__one">
            <p>Investments</p>
            <Link to="/purchase" className="dashbottom__purchase">
              <FontAwesomeIcon icon={faPlus} />
              Upgrade
            </Link>
          </div>
          <div className="dashbottom__two">
            <div className="dashbottom__box">
              <div className="dashbottom__box__text">
                <span>NO INVESTMENTS</span>
                <p>name</p>
              </div>
              <p className="dashbottom__box__location">Boston</p>
            </div>
            <div className="dashbottom__box">
              <div className="dashbottom__box__text">
                <span>NO INVESTMENTS</span>
                <p>name</p>
              </div>
              <p className="dashbottom__box__location">Boston</p>
            </div>
          </div>
          <div className="dashbottom__three">
            <button className="dashbottom__selector">
              1
              <FontAwesomeIcon
                icon={faAngleDown}
                className="dashbottom__icon"
              />
            </button>
            <div className="dashbottom__three__options">
              <div className="dashbottom__option">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="dashbottom__icon"
                />
                <p>Prev</p>
              </div>
              <button disabled>1</button>
              <div className="dashbottom__option">
                <p>Next</p>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="dashbottom__icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashBottom;
