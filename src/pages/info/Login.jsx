import React, { useState } from "react";
import "./styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth"; // Import signInWithEmailAndPassword function
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

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

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully!");
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
      console.error("Error logging in:", error.message);
    }
  };

  const passwordSubmit = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    document.querySelector(".login__reset").style.display = "block";
    document.querySelectorAll('input[type="email"]').forEach((input) => {
      input.value = "";
    });
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
                {error && <p className="login__error">{error}</p>}
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
