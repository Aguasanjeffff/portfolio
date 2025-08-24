import React from "react";
import "./Education.css";
import elemLogo from "../assets/elemlogo.png";
import auLogo from "../assets/aulogo.png";
import highLogo from "../assets/highlogo.png";

function Education() {
  return (
    <div className="education">
      <h1 className="title">Educational Background</h1>
      <p className="subtitle">
        My educational background reflects my dedication to continuous growth and development. It highlights my pursuit of knowledge and skills to succeed and make an impact in my chosen field.
      </p>

      <div className="schools">

        <div className="collegeschool">
          <div className="content">
            <h3>PHINMA Araullo University</h3>
            <p>Bachelor of Science in Information Technology</p>
            <p>S.Y. 2023 - 2027</p>
            <p>Cabanatuan City, Nueva Ecija</p>
          </div>
          <div className="circle">
            <img src={auLogo} alt="College School Logo" />
          </div>
        </div>

        <div className="seniorhighschool">
          <div className="content">
            <h3>PHINMA Araullo University</h3>
            <p>Senior High School</p>
            <p>S.Y. 2021 - 2023</p>
            <p>Cabanatuan City, Nueva Ecija</p>
          </div>
          <div className="circle">
            <img src={auLogo} alt="Senior High School Logo" />
          </div>
        </div>

        <div className="juniorhighschool">
          <div className="content">
            <h3>Mataas na Kahoy NHS</h3>
            <p>Junior High School</p>
            <p>S.Y. 2017 - 2021</p>
            <p>General M. Natividad, Nueva Ecija</p>
          </div>
          <div className="circle">
            <img src={highLogo} alt="School Logo" />
          </div>
        </div>

        <div className="elementaryschool">
          <div className="content">
            <h3>Antonio G. Llamas Elementary School</h3>
            <p>S.Y. 2011 - 2017</p>
            <p>Mariveles, Bataan</p>
          </div>
          <div className="circle">
            <img src={elemLogo} alt="Elementary School Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
