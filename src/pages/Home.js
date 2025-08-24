import React, { useState, useEffect } from "react";
import "./Home.css";
import myPhoto from "../assets/my-photo.png";

const Home = () => {
  const roles = ["Front-End Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    const typingEffect = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000); // pause bago mag-delete
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [charIndex, isDeleting, roles, roleIndex]);

  return (
    <section className="home-section">
      {/* LEFT SIDE */}
      <div className="home-content">
        <h1 className="intro-greeting">Hi!</h1>
        <h1 className="intro-name">
          I'm <span className="highlight-name">Jeffrey Aguasan</span>
        </h1>
        <h2 className="intro-role">
          A {text}
        </h2>
        <p className="intro-quote">
          "Design and development inspire me to create systems that truly connect with users."
        </p>

        <div className="contact-details">
          <p>📍 Mataas na Kahoy, General Natividad, Nueva Ecija (Philippines)</p>
          <p>📞 (+63) 931 032 2974</p>
          <p>📩 aguasanjeffrey29@gmail.com</p>
        </div>

        <br></br>

        <a href="/resume.pdf" download="Jeffrey_Aguasan_Resume.pdf">
          <button className="btn-resume">Download CV</button>
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div className="home-image-wrapper">
        <div className="image-border">
          <img src={myPhoto} alt="Jeffrey Aguasan" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;



