import "./styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faCircleQuestion, faCalendar } from "@fortawesome/free-solid-svg-icons";
function Services() {
  return (
    <section className="services" id="services">
      <div className="services__content">
        <div className="services__title">
          <h2>Services</h2>
          <p>Discover The Power AI With YouCoin</p>
        </div>
        <div className="services__box">
          <div className="services___box__left">
            <div className="service__box__topic">
              <h3>Consulting</h3>
              <p>Ideal stategies for investments.</p>
            </div>
            <div className="service__box__container">
              <div className="service__box__reasons">
                <FontAwesomeIcon icon={faTag} rotation={90} />
                <p>Sustainable prices.</p>
              </div>
              <div className="service__box__reasons">
              <FontAwesomeIcon icon={faCalendar} />
                <p>Gain Access to meeting and conferences. </p>
              </div>
              <div className="service__box__reasons">
                <FontAwesomeIcon icon={faCircleQuestion} />
                <p>Dedicated customer operations support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
