import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logoname from "../assets/logoname.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Detect active section
  useEffect(() => {
    const sections = ["home", "education", "skills", "projects", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // offset for navbar height
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleScrollTo = (id) => (e) => {
    if (e) e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
  };

  const renderLink = (id, label) => (
    <a
      href={`#${id}`}
      onClick={handleScrollTo(id)}
      className={activeSection === id ? "active" : ""}
    >
      {label}
    </a>
  );

  return (
    <nav className={`navbar ${showNavbar ? "show" : "hide"}`}>
      <div className="logoname">
        <img src={logoname} alt="Logo"/>
      </div>

      {/* Desktop */}
      <ul className="nav-links desktop">
        <li>{renderLink("home", "Home")}</li>
        <li>{renderLink("education", "Education")}</li>
        <li>{renderLink("skills", "Skills")}</li>
        <li>{renderLink("projects", "Projects")}</li>
        <li>{renderLink("contact", "Contact")}</li>
      </ul>

      {/* Mobile menu button */}
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span><span></span><span></span>
      </button>

      {/* Mobile menu */}
      <div className={`nav-links mobile ${isOpen ? "active" : ""}`}>
        <li>{renderLink("home", "Home")}</li>
        <li>{renderLink("education", "Education")}</li>
        <li>{renderLink("skills", "Skills")}</li>
        <li>{renderLink("projects", "Projects")}</li>
        <li>{renderLink("contact", "Contact")}</li>
      </div>
    </nav>
  );
}
