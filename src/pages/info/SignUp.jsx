import React from "react";
import "./styles/SignUp.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCircleCheck,
  faLock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { auth, firestore, database } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection } from "firebase/firestore";
import {ref, set } from "firebase/database";
import { useState } from "react";
function SignUp() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleFirstChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastChange = (event) => {
    setLastName(event.target.value);
  };
  const handleUserChange = (event) => {
    setUserName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userRef = ref(database, "users/" + user.uid);

      await set(userRef, {
        username: userName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        purchased: false,
      });

      setEmail("");
      setUserName("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setError(null);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.log(error.message)
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
            <div className="signup__form__container">
              <form action="" className="signup__form" onSubmit={handleSubmit}>
                <h3>Create your account</h3>
                <div className="signup__input__div">
                  <label htmlFor="signup__fName" className="fName-label">
                    <FontAwesomeIcon icon={faUser} className="icon__color" />
                  </label>
                  <input
                    required
                    type="text"
                    id="signup__fName"
                    placeholder="First Name"
                    className="signup__input"
                    value={firstName}
                    onChange={handleFirstChange}
                  />
                </div>
                <div className="signup__input__div">
                  <label htmlFor="signup__lName" className="lName-label">
                    <FontAwesomeIcon icon={faUser} className="icon__color" />
                  </label>
                  <input
                    required
                    type="text"
                    id="signup__lName"
                    placeholder="Last Name"
                    className="signup__input"
                    value={lastName}
                    onChange={handleLastChange}
                  />
                </div>
                <div className="signup__input__div">
                  <label htmlFor="signup__username" className="username-label">
                    <FontAwesomeIcon icon={faUser} className="icon__color" />
                  </label>
                  <input
                    required
                    type="text"
                    id="signup__username"
                    placeholder="Username"
                    className="signup__input"
                    value={userName}
                    onChange={handleUserChange}
                  />
                </div>
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
                    value={email}
                    onChange={handleEmailChange}
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
                <button type="submit" className="signup__button">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
