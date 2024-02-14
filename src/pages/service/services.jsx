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
                  <p>
                    Gain Access to meeting and conferences where you are taught
                    how to use the AI.{" "}
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
                  src="https://cdn.discordapp.com/attachments/1187219037537714220/1198803051448901662/image.png?ex=65dbead8&is=65c975d8&hm=276d99fa248df603dc6f48c6c5cc6d98e32aa1af6ca4e61ed1938f0b800a29d4&"
                  alt="Lighting Bolt"
                />
                <div className="service__right__content">
                  <h3 className="service__right__title">
                    YouCoin Data Collection
                  </h3>
                  <p>
                    YouCoin provides past and present date for crypto currencies
                    and all investment strategies
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
                  src="https://cdn.discordapp.com/attachments/1187219037537714220/1198812328255295558/image.png?ex=65dbf37b&is=65c97e7b&hm=70739198a2424198b3eea69ed1dd577fef8e48338e01dd80e5f32cb61a5bbbb2&"
                  alt="Colorful circle"
                />
                <div className="service__right__content">
                  <h3 className="service__right__title">
                    YouCoin AI Intelligence
                  </h3>
                  <p>
                    Our AI is meticulously trained using a wealth of crypto
                    knowledge, meticulously curated from data spanning back to
                    2018.
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
            </div>
          </div>

          <div className="services__box">
            <div className="services___box__left">
              <div className="service__box__topic">
                <h3>Short Term Or Long Term</h3>
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
                  src="https://cdn.discordapp.com/attachments/1187219037537714220/1207421736682004480/image.png?ex=65df961e&is=65cd211e&hm=75a2c40a2977789c5f56721abbe6536db85466523c690e24c56aee555df414bf&"
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
                    onMouseOver={setArrowStyle("hero__invest__arrow")}
                    onMouseOut={resetArrowStyle("hero__invest__arrow")}
                  >
                    Book a Demo<span className="hero__invest__arrow">→</span>
                  </Link>
                </div>
              </div>
              <div className="service__right__div">
                <img
                  src="https://cdn.discordapp.com/attachments/1187219037537714220/1198803876766285895/image.png?ex=65dbeb9c&is=65c9769c&hm=2e60b03cc63ad46ece1832d9b3e5ce67f39866e29025aefa8466951ec4eabb46&"
                  alt="Colorfull Octagon"
                />
                <div className="service__right__content">
                  <h3 className="service__right__title">
                    Organization Bonus
                  </h3>
                  <p>
                  Receive complimentary guidance on your initial $10,000 investment.
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
