import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <Link className="navbar-brand" to="/">
      Greenwood International High School
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link custom-nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-nav-link" to="/about-us">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-nav-link" to="/academics">
              Academics
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-nav-link" to="/admissions">
              Admissions
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-nav-link" to="/faculty">
              Faculty
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-nav-link" to="/students">
              Students
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-nav-link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-nav-link" to="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
