import React from "react";
import "./styles/SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section className="signup" id="signUp">
      <div className="signup__container">
        <div className="signup__left"></div>
        <div className="signup__right">
          <div className="signup__top">
            <p>Have an account? <Link to='/login' className="signup__login">Log in</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
