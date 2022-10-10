import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contactFormDiv">
      <h3>Contact Me</h3>
      <h6>
        <a href="mailto:brobertswebdev@gmail.com">brobertswebdev@gmail.com</a>
      </h6>
      <h6>(520) 360-3373</h6>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Your Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="First Last"
            name="user_name"
          ></input>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Your Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            name="user_email"
          ></input>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Your Phone Number</label>
          <input
            type="phone"
            className="form-control"
            placeholder="000-000-0000"
            name="user_phone"
          ></input>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Your Message</label>
          <textarea className="form-control" rows="3" name="message"></textarea>
        </div>
      </form>
      <button type="submit" className="btn submitBtn">
        Send Email
      </button>
    </div>
  );
}

export default Contact;
