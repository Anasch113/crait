import React, { useState } from "react";
import "./styles/Login.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { createdAccounts } from "../AccountData/data.js";
function Login() {
  const [needReset, setNeedReset] = useState(false);
  const passwordSubmit = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    document.querySelector(".login__reset").style.display = "block";
    document.querySelectorAll('input[type="email"]').forEach((input) => {
      input.value = "";
    });
  };

  const navigate = useNavigate();
  const [loginFormData, setloginFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const logInSubmit = (e) => {
    e.preventDefault();

    const isValidLogin = createdAccounts.some(
      (account) =>
        account.username === loginFormData.email &&
        account.password === loginFormData.password
    );

    if (isValidLogin) {
      document.querySelectorAll('input[type="text"]').forEach((input) => {
        input.value = "";
      });
      document.querySelectorAll('input[type="password"]').forEach((input) => {
        input.value = "";
      });
      document.querySelector(".login__wrong").style.display = "none";

      navigate(`/dashboard/${loginFormData.email}`);
    } else {
      document.querySelector(".login__wrong").style.display = "block";
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
              Dont have an account?{" "}
              <Link to="/signup" className="login__link">
                Sign up
              </Link>
            </p>
            <Link to="/signup" className="login__link__lower">
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

                <button className="login__submit">Submit</button>
              </form>
            ) : (
              <form className="login__form" onSubmit={logInSubmit}>
                <h3>Log in to your account</h3>
                <div className="login__form__option__container"></div>
                <p className="login__wrong">Wrong email or password</p>
                <div className="login__input__div">
                  <label htmlFor="login__email" className="email-label">
                    <FontAwesomeIcon icon={faUser} className="icon__color" />
                  </label>
                  <input
                    required
                    type="text"
                    id="login__email"
                    name="email"
                    placeholder="Email"
                    className="login__input"
                    value={loginFormData.email}
                    onChange={handleChange}
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
                    name="password"
                    placeholder="Password"
                    className="login__input"
                    value={loginFormData.password}
                    onChange={handleChange}
                  />
                </div>
                <p className="login__forgot" onClick={() => setNeedReset(true)}>
                  Don't remember your password?
                </p>
                <button className="login__button">Log In</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
