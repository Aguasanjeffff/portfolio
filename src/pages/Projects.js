import React from "react";
import "./Projects.css";
import carrental from "../assets/carrental.png";
import eventreservation from "../assets/eventreservation.png";

function Projects() {
  return (
    <div className="projects">
      <h1 className="title">My Projects</h1>
      <p className="subtitle">
        Here are some of the systems I have developed, showcasing my skills and
        creativity. These projects reflect my growth as a web developer and my
        ability to turn ideas into functional solutions.
      </p>

      {/* Project 1: Rent & Go */}
      <div className="project-container">
        <div className="project-left">
          <div className="project-image-box">
            <img src={carrental} alt="Car Rental System" className="project-img" />
            <h2 className="project-name">Rent & Go</h2>
            <p className="project-type">Car Rental Management System</p>
          </div>
        </div>
        <div className="project-right">
          <p>
            The <b>Car Rental Management System</b> is a web-based platform built to simplify and automate the vehicle rental process. Customers can explore available cars, reserve them online, and manage their bookings with ease, while administrators can efficiently handle vehicle listings, monitor rental transactions, and oversee customer records in one centralized system.
          </p>

          <div className="tools">
            <h4>Tools Used:</h4>
            <div className="tools-list">
              <span className="tool">HTML</span>
              <span className="tool">CSS</span>
              <span className="tool">JavaScript</span>
              <span className="tool">PHP</span>
              <span className="tool">MySQL</span>
            </div>
          </div>

          <a
            href="http://rentandgo.onlinewebshop.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="domain-btn"
          >
            Visit Project
          </a>
        </div>
      </div>

      {/* Project 2: Caezelle Catering */}
      <div className="project-container reverse">
        <div className="project-left">
          <div className="project-image-box">
            <img src={eventreservation} alt="Event Reservation System" className="project-img" />
            <h2 className="project-name">Caezelle Catering Services</h2>
            <p className="project-type">Events Reservation Management System</p>
          </div>
        </div>
        <div className="project-right">
          <p>
            The <b>Events Reservation Management System</b> is an online platform designed to simplify event catering reservations. Clients can view available packages, select event dates, and book services, while administrators can manage packages, approve bookings, and organize schedules in one place.
          </p>

          <div className="tools">
            <h4>Tools Used:</h4>
            <div className="tools-list">
              <span className="tool">HTML</span>
              <span className="tool">CSS</span>
              <span className="tool">JavaScript</span>
              <span className="tool">Laravel</span>
              <span className="tool">PHP</span>
              <span className="tool">MySQL</span>
            </div>
          </div>

          <a
            href="http://caezellecatering.getenjoyment.net/login"
            target="_blank"
            rel="noopener noreferrer"
            className="domain-btn"
          >
            Visit Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
