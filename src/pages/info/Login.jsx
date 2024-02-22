import React from "react";
import "./styles/Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <section id="login" className="login">
        <div className="login__container">
          <div className="login__top">
            <p>
              Dont have an account? <Link className="login__link">Sign up</Link>
            </p>
          </div>
          <div className="login__content">
            <form className="login__form">
              <h3>Log in to your account</h3>
              <div className="login__form__option__container">
                <div className="login__form__flex">
                  <div className="login__form__options google__image">
                    <img
                      className="login__form__option__image"
                      src="https://cdn.discordapp.com/attachments/1187219037537714220/1210032566271217664/2048px-Google_22G22_logo.png?ex=65e915a5&is=65d6a0a5&hm=1d888ddec63d56e978045eadb0b374e0a2f7e35147e2a4be2576c4e3e566ab8e&"
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
                    />
                  </div>

                  <div className="login__form__option__text github__color">
                    LOG IN WITH GITHUB
                  </div>
                </div>
              </div>
              <p>or</p>
              <input type="email" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
