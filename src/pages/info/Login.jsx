import React, { useState } from "react";
import "./styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import google from './images/google.png'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

function Login() {
  const [needReset, setNeedReset] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(`/dashboard/${email}`);
    } catch (error) {
      setError(error.message);
      document.querySelector(".login__wrong").style.display = "block";
    }
  };

  const passwordSubmit = async (e) => {
    e.preventDefault();
    const emailInput = document.querySelector(".login__password__email");
    const email = emailInput.value.trim();
    try {
      await sendPasswordResetEmail(auth, email);
      document.querySelector(".login__reset").style.display = "block";
    } catch (error) {
      console.error("Error sending password reset email: ", error);
    }
    emailInput.value = "";
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        navigate(`/dashboard/${user.email}`);
      }
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };
  return (
    <>
      <section id="logIn" className="login">
        <div className="login__container">
          <div className="login__top">
            <Link to="/" className="login__back">
              ← Home
            </Link>
            <p className="login__top__text">
              Don't have an account?{" "}
              <Link to="/signup" className="login__link">
                Sign up
              </Link>
            </p>
          </div>
          <div className="login__content">
            {needReset ? (
              <form className="login__form" onSubmit={passwordSubmit}>
                <h3>Reset your password</h3>
                <p className="login__reset__des">
                  Type your registered email to reset password
                </p>

                <p className="login__reset"> Reset has been sent to email</p>
                <div className="login__input__div login__password__div">
                  <label htmlFor="login__email" className="email-label">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="icon__color"
                    />
                  </label>
                  <input
                    required
                    type="email"
                    id="login__email"
                    placeholder="Email"
                    className="login__input login__password__email"
                  />
                </div>

                <button className="login__submit">Submit</button>
              </form>
            ) : (
              <form className="login__form" onSubmit={handleLogin}>
                <h3>Log in to your account</h3>
                <div className="login__form__option__container">
                  <div
                    className="login__form__flex"
                    onClick={handleGoogleSignIn}
                  >
                    <div className="login__form__options google__image">
                      <img
                        className="login__form__option__image"
                        src={google}
                        alt="Google Logo"
                      />
                    </div>
                    <div className="login__form__option__text google__color">
                      LOG IN WITH GOOGLE
                    </div>
                  </div>
                </div>
                <p className="login__or">or</p>
                <p className="login__wrong">Invalid account information</p>
                <div className="login__input__div">
                  <label htmlFor="login__email" className="email-label">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="icon__color"
                    />
                  </label>
                  <input
                    required
                    type="email"
                    id="login__email"
                    placeholder="Email"
                    className="login__input"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="login__input__div">
                  <label htmlFor="login__password" className="password-label">
                    <FontAwesomeIcon icon={faLock} className="icon__color" />
                  </label>
                  <input
                    required
                    type="password"
                    id="login__password"
                    placeholder="Password"
                    className="login__input"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <p className="login__forgot" onClick={() => setNeedReset(true)}>
                  Don't remember your password?
                </p>

                <button type="submit" className="login__button">
                  Log In
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
