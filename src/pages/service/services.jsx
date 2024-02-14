import "./styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faCircleQuestion,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
        </div>
      </div>
    </section>
  );
}

export default Services;
