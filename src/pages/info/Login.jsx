import React, { useState } from "react";
import "./styles/Login.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Login() {
  const [needReset, setNeedReset] = useState(false);

  const passwordSubmit = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    document.querySelector('.login__reset').style.display = 'block'
    document.querySelectorAll('input[type="email"]').forEach((input) => {
      input.value = "";
    });
  };
  return (
    <>
      <section id="login" className="login">
        <div className="login__container">
          <div className="login__top">
            <Link to="/" className="login__back">
              ← Home
            </Link>
            <p className="login__top__text">
              Dont have an account? <Link className="login__link">Sign up</Link>
            </p>
            <Link className="login__link__lower">Sign up</Link>
          </div>
          <div className="login__content">
          {needReset ? (
              <form className="login__form" onSubmit={passwordSubmit}>
                <h3>Reset your password</h3>
                <p className="login__reset__des">Type your registered email to reset password</p>
                <p className="login__reset"> Reset has been sent to email</p>
                <div className="login__input__div">
                  <label htmlFor="login__email" className="email-label">
                  <FontAwesomeIcon icon={faEnvelope} className="icon__color"/>
                  </label>
                  <input
                    required
                    type="email"
                    id="login__email"
                    placeholder="Email"
                    className="login__input"
                  />
                </div>

                <button className="login__submit" >Submit</button>
              </form>
            ) : (
              <form className="login__form">
                <h3>Log in to your account</h3>
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
                      LOG IN WITH GOOGLE
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
                      LOG IN WITH GITHUB
                    </div>
                  </div>
                </div>
                <p className="login__or">or</p>
                <div className="login__input__div">
                  <label htmlFor="login__email" className="email-label">
                    <FontAwesomeIcon icon={faUser} className="icon__color" />
                  </label>
                  <input
                    required
                    type="email"
                    id="login__email"
                    placeholder="Email"
                    className="login__input"
                  />
                </div>
                <div className="login__input__div">
                  <label htmlFor="login__password" className="password-label">
                    <FontAwesomeIcon icon={faLock} className="icon__color"/>
                  </label>
                  <input
                    required
                    type="password"
                    id="login__password"
                    placeholder="Password"
                    className="login__input"
                  />
                </div>
                <p className="login__forgot" onClick={()=>setNeedReset(true)}>Don't remember your password?</p>
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
