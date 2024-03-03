import React, { useState } from "react";
import "./styles/Login.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
function Login() {
  const [needReset, setNeedReset] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setError(null);
      navigate("/dashboard");
      document.querySelector(".login__wrong").style.display = "none";
    } catch (error) {
      document.querySelector(".login__wrong").style.display = "block";
      event.preventDefault();
      setError(error.message);
    }
  };

  const passwordSubmit = async (e) => {
    e.preventDefault();
    const emailInput = document.querySelector(".login__password__email");
    const email = emailInput.value.trim();
    try {
      await sendPasswordResetEmail(auth, email);
      document.querySelector(".login__reset").style.display = "block";
      document.querySelector(".login__reset__des").style.display = "none";
    } catch (error) {
      document.querySelector(".login__reset__des").style.display = "block";
      document.querySelector(".login__reset").style.display = "none";
      console.error("Error sending password reset email: ", error);
    }
    emailInput.value = "";
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
            <Link to="/signup" className="login__link2">
              Sign up
            </Link>
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
                <p className="login__forgot" onClick={() => setNeedReset(false)}>
                  Remember your password?
                </p>
                <button className="login__submit">Submit</button>
              </form>
            ) : (
              <form className="login__form" onSubmit={handleSubmit}>
                <h3>Log in to your account</h3>
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
