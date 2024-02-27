import React from "react";
import "./styles/SignUp.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCircleCheck,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
function SignUp() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      document.querySelector(".signup__reset").style.display = "block";
      document.querySelector(".login__wrong").style.display = "none";
      document.querySelectorAll('input[type="email"]').forEach((input) => {
        input.value = "";
      });
      document.querySelectorAll('input[type="password"]').forEach((input) => {
        input.value = "";
      });
    } catch (error) {
      console.error("Error signing up:", error.message);
      document.querySelector(".signup__reset").style.display = "none";
      document.querySelector(".login__wrong").style.display = "block";
    }
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
            <div
              className="signup__form__container"
              onClick={handleGoogleSignIn}
            >
              <form action="" onSubmit={handleSignUp} className="signup__form">
                <h3>Create your account</h3>
                <div className="login__form__option__container">
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
                </div>
                <p className="login__or">or</p>
                <div className="signup__input__div">
                  <label htmlFor="signup__email" className="email-label">
                    <FontAwesomeIcon icon={faUser} className="icon__color" />
                  </label>
                  <input
                    required
                    type="email"
                    id="signup__email"
                    placeholder="Email"
                    className="signup__input"
                    value={email}
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
                    id="signup__password"
                    name="password"
                    placeholder="Password"
                    className="signup__input"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <p className="login__wrong">Invalid email information</p>
                <p className="signup__reset"> Account has been created</p>
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
