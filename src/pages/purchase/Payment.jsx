import "./styles/Payment.css";
import React, { useState } from "react";
function Payment() {
  const [code, setCode] = useState(true);
  const [form, setForm] = useState(false);
  return (
    <div className="payment__container">
      <div className="payment__code" onClick={() => setCode(true)}>
        <div className="payment__flex">
          <div
            className={
              code ? "purchase__box__button__sel" : "purchase__box__button__not"
            }
          ></div>
          <p className="purchase__box__title2">Pro - 1 Month Free</p>
        </div>
      </div>
      <div className="payment__new" onClick={() => setCode(false)}>
        <div className="payment__flex">
          <div
            className={
              code ? "purchase__box__button__not" : "purchase__box__button__sel"
            }
          ></div>
          <p className="purchase__box__title2">Add new payment method</p>
        </div>
        {code ? (
          ""
        ) : (
          <form>
            <div className="payment__flex__form">
              <label htmlFor="cardHolderName">Email</label>
              <input type="text" id="cardHolderName" name="cardHolderName" className="payment__input" placeholder="Cardholder name"/>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Payment;
