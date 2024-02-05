import React, { useState } from "react";
import "./styles/BookForm.css";
function BookForm() {
  const [subScreen, setSubScreen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    workEmail: "",
    phoneNumber: "",
    budget: "",
    preferences: [],
    description: "",
    termsAccepted: false,
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value)
          : value,
    }));
  };
  const handleSubmit = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      companyName: "",
      jobTitle: "",
      workEmail: "",
      phoneNumber: "",
      budget: "",
      preferences: [],
      description: "",
      termsAccepted: false,
    });
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.checked = false;
    });

    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
    document.querySelectorAll('input[type="text"]').forEach((input) => {
      input.value = "";
    });
    document.querySelectorAll("textarea").forEach((textarea) => {
      textarea.value = "";
    });
    setSubScreen(true);
  };
  return (
    <div className="book__info">
      <h2>Let's Invest Together</h2>
      <p>
        Book a personalized 1:1 demo for an in-depth exploration of AI and our
        innovative investing process. Our expert team is committed to offering a
        thorough overview.
      </p>
      {subScreen ? (
        <>
          <p className="book__submitted">
            Thanks for reaching out! We'll be in touch shortly.
          </p>
        </>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <div className="book__grid">
            <input
              type="text"
              placeholder="First Name*"
              className="book__input"
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="book__input"
              required
            />
            <input
              type="text"
              placeholder="Company name"
              className="book__input"
            />
            <input
              type="text"
              placeholder="Job title"
              className="book__input"
            />
            <input
              type="text"
              placeholder="Work Email"
              className="book__input"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="book__input"
            />
          </div>
          <p className="book__category">Project Budget</p>
          <div className="book__input__flex">
            <div className="book__input__div">
              <input
                type="radio"
                id="radio1"
                className="book__radio"
                name="budget"
              />
              <label htmlFor="radio1" className="book__label">
                $0 - 50k
              </label>
            </div>
            <div className="book__input__div">
              <input
                type="radio"
                id="radio2"
                className="book__radio"
                name="budget"
              />
              <label htmlFor="radio2" className="book__label">
                $50k-100k
              </label>
            </div>
            <div className="book__input__div">
              <input
                type="radio"
                id="radio3"
                className="book__radio"
                name="budget"
              />
              <label htmlFor="radio3" className="book__label">
                $100k-250k
              </label>
            </div>
            <div className="book__input__div">
              <input
                type="radio"
                id="radio4"
                className="book__radio"
                name="budget"
              />
              <label htmlFor="radio5" className="book__label">
                $250k-$500k
              </label>
            </div>
            <div className="book__input__div">
              <input
                type="radio"
                id="radio5"
                className="book__radio"
                name="budget"
              />
              <label htmlFor="radio5" className="book__label">
                $500k-$1M
              </label>
            </div>
            <div className="book__input__div">
              <input
                type="radio"
                id="radio6"
                className="book__radio"
                name="budget"
              />
              <label htmlFor="radio6" className="book__label">
                $1M+
              </label>
            </div>
          </div>
          <p className="book__category">
            What can we help with? Select all that apply.*
          </p>
          <div className="book__input__flex">
            <div className="book__input__div">
              <input
                type="checkbox"
                id="check1"
                className="book__radio"
                name="preference"
              />
              <label htmlFor="check1" className="book__label">
                Currency Exchange
              </label>
            </div>
            <div className="book__input__div">
              <input
                type="checkbox"
                id="check2"
                className="book__radio"
                name="preference"
              />
              <label htmlFor="check2" className="book__label">
                Short term Investments
              </label>
            </div>
            <div className="book__input__div">
              <input
                type="checkbox"
                id="check3"
                className="book__radio"
                name="preference"
              />
              <label htmlFor="check3" className="book__label">
                Long term Investments
              </label>
            </div>
            <div className="book__input__div">
              <input
                type="checkbox"
                id="check4"
                className="book__radio"
                name="preference"
              />
              <label htmlFor="check4" className="book__label">
                Other
              </label>
            </div>
          </div>
          <textarea
            name="description"
            id="textarea1"
            placeholder="Please describe your goals and thoughts in detail (volume, budget, etc.)*"
            className="book__textarea"
            required
          ></textarea>
          <div className="book__bottom">
            <div className="book__input__div">
              <input
                type="checkbox"
                id="terms"
                className="book__radio"
                name="preference"
                required
              />
              <label htmlFor="terms" className="book__label book__tos">
                I agree and accept Terms of Service.*
              </label>
            </div>
            <input type="submit" value="Submit" className="book__submit" />
          </div>
        </form>
      )}
    </div>
  );
}

export default BookForm;
