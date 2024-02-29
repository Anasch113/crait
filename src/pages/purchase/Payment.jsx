import React from "react";
import "./styles/Payment.css";
function Payment() {
  return (
    <div className="payment__container">
      <div className="payment__code">
        <div className="payment__flex">
          <div className="purchase__box__button__sel"></div>
          <p className="purchase__box__title2">Pro - 1 Month Free</p>
        </div>
      </div>
      <div className="payment__new">
        <div className="payment__flex">
          <div className="purchase__box__button__not"></div>
          <p className="purchase__box__title2">Pro - 1 Month Free</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
