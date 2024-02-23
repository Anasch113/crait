import React, { useEffect, useState } from "react";
import "./styles/BookForm.css";
import { Link } from "react-router-dom";
function BookForm() {
  const [subScreen, setSubScreen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    budget: "",
    preferences: [],
    description: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "preference") {
        setFormData((prevData) => ({
          ...prevData,
          preferences: checked
            ? [...prevData.preferences, value]
            : prevData.preferences.filter((item) => item !== value),
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: checked,
        }));
      }
    } else if (type === "radio") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0); 
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
          <Link to="/" className="book__submit">
            Back to Home
          </Link>
        </>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <div className="book__grid">
            <input
              type="text"
              placeholder="First Name*"
              className="book__input"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="book__input"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Company name"
              className="book__input"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Job title"
              className="book__input"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Work Email"
              className="book__input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Phone number"
              className="book__input"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <p className="book__category">Project Budget</p>
          <div className="book__input__flex">
            <div className="book__input__div2">
              <input
                type="radio"
                id="radio1"
                className="book__radio"
                name="budget"
                value="$0 - 50k"
                onChange={handleChange}
              />
              <label htmlFor="radio1" className="book__label">
                $0 - 50k
              </label>
            </div>
            <div className="book__input__div2">
              <input
                type="radio"
                id="radio2"
                className="book__radio"
                name="budget"
                value="$50k-100k"
                onChange={handleChange}
              />
              <label htmlFor="radio2" className="book__label">
                $50k-100k
              </label>
            </div>
            <div className="book__input__div2">
              <input
                type="radio"
                id="radio3"
                className="book__radio"
                name="budget"
                value="$100k-250k"
                onChange={handleChange}
              />
              <label htmlFor="radio3" className="book__label">
                $100k-250k
              </label>
            </div>
            <div className="book__input__div2">
              <input
                type="radio"
                id="radio4"
                className="book__radio"
                name="budget"
                value="$250k-$500k"
                onChange={handleChange}
              />
              <label htmlFor="radio4" className="book__label">
                $250k-$500k
              </label>
            </div>
            <div className="book__input__div2">
              <input
                type="radio"
                id="radio5"
                className="book__radio"
                name="budget"
                value="$500k-$1M"
                onChange={handleChange}
              />
              <label htmlFor="radio5" className="book__label">
                $500k-$1M
              </label>
            </div>
            <div className="book__input__div2">
              <input
                type="radio"
                id="radio6"
                className="book__radio"
                name="budget"
                value="$1M+"
                onChange={handleChange}
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
              <div>
                <input
                  type="checkbox"
                  id="check1"
                  className="book__radio"
                  name="preference"
                  value="Currency Exchange"
                  onChange={handleChange}
                />
                <label htmlFor="check1" className="book__label">
                  Currency Exchange
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="check2"
                  className="book__radio"
                  name="preference"
                  value="Short term Investments"
                  onChange={handleChange}
                />
                <label htmlFor="check2" className="book__label">
                  Short term Investments
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="check3"
                  className="book__radio"
                  name="preference"
                  value="Long term Investments"
                  onChange={handleChange}
                />
                <label htmlFor="check3" className="book__label">
                  Long term Investments
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="check4"
                  className="book__radio"
                  name="preference"
                  value="Other"
                  onChange={handleChange}
                />
                <label htmlFor="check4" className="book__label">
                  Other
                </label>
              </div>
            </div>
          </div>
          <textarea
            name="description"
            id="textarea1"
            placeholder="Please describe your goals and thoughts in detail (volume, budget, etc.)*"
            className="book__textarea"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <div className="book__bottom">
            <div className="book__input__div2">
              <input
                required
                type="checkbox"
                id="terms"
                className="book__radio"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
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
