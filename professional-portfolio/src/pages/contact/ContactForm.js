import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

function Contact() {
  let [senderName, setSenderName] = useState("");
  let [senderEmail, setSenderEmail] = useState("");
  let [senderPhone, setSenderPhone] = useState("");
  let [message, setMessage] = useState("");

  let contactFormInputs = {
    sender_name: senderName,
    sender_email: senderEmail,
    sender_phone: senderPhone,
    message: message,
  };

  function updateTextState(event) {
    switch (event.target.name) {
      case "sender_name":
        setSenderName(event.target.value);
        break;
      case "sender_email":
        setSenderEmail(event.target.value);
        break;
      case "sender_phone":
        setSenderPhone(event.target.value);
        break;
      case "message":
        setMessage(event.target.value);
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const feedbackField = document.querySelector(".sendFeedback");
    emailjs
      .send(
        "portfolio_email",
        "portfolio_contact_form",
        contactFormInputs,
        "-nVgwSSo7LJY0IG8O"
      )
      .then(
        (response) => {
          console.log("Email sent.", response.status, response.text);
          feedbackField.classList.add("messageSent");
          feedbackField.textContent = "Your message was sent.";
        },
        (err) => {
          console.log("Something went wrong...", err);
          feedbackField.classList.add("messageProblem");
          feedbackField.textContent = "Something went wrong...";
        }
      );
  }

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
        <a href="mailto:brobertswebdev@gmail.com">relero90@gmail.com</a>
      </h6>
      <h6>(520) 360-3373</h6>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleFormControlInput1">Your Name</label>
          <input
            type="text"
            className="form-control nameInput"
            placeholder="First Last"
            name="sender_name"
            onChange={updateTextState}
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
            name="sender_email"
            onChange={updateTextState}
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
            name="sender_phone"
            onChange={updateTextState}
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
            onChange={updateTextState}
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
        <p className="sendFeedback"></p>
      </form>
    </div>
  );
}

export default Contact;
