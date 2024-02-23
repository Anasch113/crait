import React from "react";
import "./styles/SignUp.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCircleCheck,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { createdAccounts } from "../AccountData/data.js";
function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createdAccounts.push({
      username : username,
      password: password
    },)
    setUsername("");
    setPassword("");
  };
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
              <Link to="/demo" className="signup__button">
                Book Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="signup__right">
          <div className="signup__right__content">
            <div className="signup__top">
              <Link to="/" className="login__back">
                ← Home
              </Link>
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
              <form action="" onSubmit={handleSubmit} className="signup__form">
                <h3>Create your account</h3>
                <div className="signup__form__options"></div>
                <div className="signup__input__div">
                  <label htmlFor="signup__username" className="username-label">
                    <FontAwesomeIcon icon={faUser} className="icon__color" />
                  </label>
                  <input
                    minLength={6}
                    required
                    type="text"
                    id="signup__username"
                    placeholder="Username"
                    className="signup__input"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="signup__input__div">
                  <label htmlFor="signup__password" className="password-label">
                    <FontAwesomeIcon icon={faLock} className="icon__color" />
                  </label>
                  <input
                    minLength={6}
                    required
                    type="password"
                    id="login__password"
                    name="password"
                    placeholder="Password"
                    className="signup__input"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <p className="signup__reset">
                  {" "}
                  Register link has been sent to email
                </p>
                <button className="signup__button">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
