import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import figmalogo from "../assets/figmalogo.png";
import htmllogo from "../assets/htmllogo.png";
import csslogo from "../assets/csslogo.png";
import jslogo from "../assets/jslogo.png";

import figmacert from "../assets/figmacert.png";
import jscert from "../assets/jscert.jpg";

const skillsData = [
  { logo: figmalogo, name: "Figma", value: 80 },
  { logo: htmllogo, name: "HTML", value: 90 },
  { logo: csslogo, name: "CSS", value: 85 },
  { logo: jslogo, name: "JavaScript (React.js | Node.js)", value: 70 },
];

function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const [openCert, setOpenCert] = useState(null); // Track which cert is open

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      // eslint-disable-next-line
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="skills" ref={sectionRef}>
      <h1 className="title">What I Do</h1>
      <p className="subtitle">
        I'm a college student aspiring to be a web developer with a strong
        desire to broaden my technological knowledge and a keen interest in
        crafting both visually appealing designs and seamless website
        functionality.
      </p>

      {/* SKILLS SECTION */}
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-header">
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                <span>{skill.name}</span>
              </div>
              <div className="progress-bar">
                <div
                  className={`progress wave ${visible ? "active" : ""}`}
                  style={{ "--target-width": visible ? `${skill.value}%` : "0%" }}
                >
                  {visible ? `${skill.value}%` : "0%"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CERTIFICATES SECTION */}
      <div className="certificates">
        <h2 className="section-title">Certificates</h2>
        <div className="cert-gallery">
          <img
            src={figmacert}
            alt="Figma Certificate"
            className="cert-img"
            onClick={() => setOpenCert(figmacert)}
          />
          <img
            src={jscert}
            alt="JavaScript Certificate"
            className="cert-img"
            onClick={() => setOpenCert(jscert)}
          />
        </div>
      </div>

      {/* MODAL FOR CERTIFICATES */}
      {openCert && (
        <div className="modal">
          <div className="modal-content">
            <img src={openCert} alt="Certificate Preview" className="modal-img" />
            <button className="done-btn" onClick={() => setOpenCert(null)}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
