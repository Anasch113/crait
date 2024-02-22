import React from "react";
import "./styles/SignUp.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
function SignUp() {
  return (
    <section className="signup" id="signUp">
      <div className="signup__container">
        <div className="signup__left">
          <div className="signup__left__content">
            <div className="signup__left__flex">
              <div className="signup__left__title">
                <h3>YouCoin</h3>
                <p>Create a YouCoin account and begin investing smart!</p>
              </div>
              <div className="signup__box">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#000" }}
                />
                <div className="signup__box__text">
                  <p className="signup__box__title">
                    Apply Our AI Cryptocurrency
                  </p>
                  <p className="signup__box__des">
                    Learn from your mistake with our AI
                  </p>
                  <p className="signup__box__des">
                    Understand Uptrends in investing
                  </p>
                </div>
              </div>
              <div className="signup__box">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#000" }}
                />
                <div className="signup__box__text">
                  <p className="signup__box__title">
                    Use Automated investments
                  </p>
                  <p className="signup__box__des">
                    Sit back and relax while our AI invest
                  </p>
                  <p className="signup__box__des">
                    Learn what i feels like to do nothing
                  </p>
                </div>
              </div>
              <div className="signup__box">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  style={{ color: "#000" }}
                />
                <div className="signup__box__text">
                  <p className="signup__box__title">Gain Access To Classes</p>
                  <p className="signup__box__des">
                    Instructors will guide you to learn the market
                  </p>
                  <p className="signup__box__des">
                    Participate online lectures{" "}
                  </p>
                </div>
              </div>
              <button className="signup__button">Book Demo</button>
            </div>
          </div>
        </div>
        <div className="signup__right">
          <div className="signup__right__content">
            <div className="signup__top">
              <p className="signup__top__larger">
                Have an account?{" "}
                <Link to="/login" className="signup__login">
                  Log in
                </Link>
              </p>
              <Link to="/login" className="signup__smaller">
                Log in
              </Link>
            </div>
            <div className="signup__form__container">
              <form action="" className="signup__form">
                <h3>Create your account</h3>
                <div className="signup__form__options">
                  <div className="login__form__flex">
                    <div className="login__form__options google__image">
                      <img
                        className="login__form__option__image"
                        src="https://cdn.discordapp.com/attachments/1187219037537714220/1210032566271217664/2048px-Google_22G22_logo.png?ex=65e915a5&is=65d6a0a5&hm=1d888ddec63d56e978045eadb0b374e0a2f7e35147e2a4be2576c4e3e566ab8e&"
                        alt="Google Logo"
                      />
                    </div>
                    <div className="login__form__option__text google__color">
                      SIGN UP WITH GOOGLE
                    </div>
                  </div>
                  <div className="login__form__flex">
                    <div className="login__form__options">
                      <img
                        className="login__form__github__image"
                        src="https://cdn.discordapp.com/attachments/1187219037537714220/1210036151323197440/github_PNG58.png?ex=65e918fb&is=65d6a3fb&hm=002e846e38165acd6faf16c4c173287c262892335e6ce12997701b4f2a750082&"
                        alt="GitHub Logo"
                      />
                    </div>

                    <div className="login__form__option__text github__color">
                      SIGN UP WITH GITHUB
                    </div>
                  </div>
                </div>
                <p className="login__or">or</p>
                <div className="signup__input__div">
                  <label htmlFor="signup__email" className="email-label">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="icon__color"
                    />
                  </label>
                  <input
                    required
                    type="email"
                    id="signup__email"
                    placeholder="Email"
                    className="signup__input"
                  />
                </div>
                <button className="signup__button">Get Link</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
