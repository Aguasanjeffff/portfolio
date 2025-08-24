import React from "react";
import "./Contact.css";
import contactuspic from "../assets/contactuspic.png";
import fblogo from "../assets/fblogo.png";
import iglogo from "../assets/iglogo.jpg";
import githublogo from "../assets/githublogo.png";
import linkedinlogo from "../assets/linkedinlogo.png";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1 className="title">Contact Me</h1>
      <p className="subtitle">
        Feel free to reach out by filling out the form below.
      </p>

      <div className="contact-container">
        <div className="contact-img">
          <img src={contactuspic} alt="Contact" />
        </div>

        <form
          className="contact-form">
          <input type="text" placeholder="Full Name" name="fullname" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <p className="social-text">Or message me through social media accounts</p>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/jeffrey.aguasan.29"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fblogo} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/aguasanjefffff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={iglogo} alt="Instagram" />
        </a>
        <a
          href="https://github.com/Aguasanjeffff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githublogo} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/jeffrey-aguasan-b2514737a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinlogo} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
