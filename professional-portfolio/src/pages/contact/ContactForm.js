import React, { useState } from "react";
import "./Contact.css";
const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

function Contact() {
  // check name and message
  // input needs to be the input DOM element
  // feedback needs to be the feedback paragraph element
  function checkIfEmpty(input, feedback) {
    const inputValue = input.value;
    if (!inputValue) {
      feedback.textContent = "This field is required";
      return;
    } else {
      feedback.textContent = "";
    }
  }

  // for email & phone
  // name value populates feedback element
  // input needs to be the input DOM element
  // feedback needs to be the feedback paragraph element
  // pass one of the regex variables declared globally
  function regexValidate(input, feedback, name, regex) {
    const inputValue = input.value;
    if (!inputValue) {
      feedback.textContent = "This field is required";
      return;
    }

    const result = regex.test(inputValue);
    if (!result) {
      feedback.textContent = `Please enter a valid ${name}.`;
      return;
    } else {
      feedback.textContent = "";
    }
  }

  return (
    <div className="contactFormDiv">
      <h3>Contact Me</h3>
      <h6>
        <a href="mailto:brobertswebdev@gmail.com">brobertswebdev@gmail.com</a>
      </h6>
      <h6>(520) 360-3373</h6>
      <form id="contact-form">
        <div className="form-group">
          <label for="exampleFormControlInput1">Your Name</label>
          <input
            type="name"
            className="form-control nameInput"
            placeholder="First Last"
            name="user_name"
            onMouseLeave={function() {
              checkIfEmpty(
                document.querySelector(".nameInput"),
                document.querySelector(".nameFeedback")
              );
            }}
          ></input>

          <p className="feedbackText nameFeedback"></p>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Your Email</label>
          <input
            type="email"
            className="form-control emailInput"
            placeholder="name@example.com"
            name="user_email"
            onMouseLeave={function() {
              regexValidate(
                document.querySelector(".emailInput"),
                document.querySelector(".emailFeedback"),
                "email",
                emailRegex
              );
            }}
          ></input>
          <p className="feedbackText emailFeedback"></p>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Your Phone Number</label>
          <input
            type="phone"
            className="form-control phoneInput"
            placeholder="000-000-0000"
            name="user_phone"
            onMouseLeave={function() {
              regexValidate(
                document.querySelector(".phoneInput"),
                document.querySelector(".phoneFeedback"),
                "phone number",
                phoneRegex
              );
            }}
          ></input>
          <p className="feedbackText phoneFeedback"></p>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Your Message</label>
          <textarea
            className="form-control messageInput"
            rows="3"
            name="message"
            onMouseLeave={function() {
              checkIfEmpty(
                document.querySelector(".messageInput"),
                document.querySelector(".messageFeedback")
              );
            }}
          ></textarea>
          <p className="feedbackText messageFeedback"></p>
        </div>
        <button type="submit" className="custom-btn btn">
          Send Email
        </button>
      </form>
    </div>
  );
}

export default Contact;
