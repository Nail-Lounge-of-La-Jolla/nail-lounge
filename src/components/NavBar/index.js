import React from "react";
import "./style.css";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavMenu"
        aria-controls="navbarNavMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars fa-lg"></i>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavMenu"
      >
        <ul className="navbar-nav">
          <li className="nav-item navbar-text">
            <Link
              to="services"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              SERVICES
            </Link>
          </li>
          <li className="nav-item navbar-text">
            <Link
              to="about"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              ABOUT US
            </Link>
          </li>
          <li className=" nav-item">
            <Link
              to="/"
              className="navbar-brand"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              NAIL LOUNGE OF LA JOLLA
            </Link>
          </li>
          <li className="nav-item navbar-text">
            <Link
              to="book"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              BOOK NOW
            </Link>
          </li>
          <li className="nav-item navbar-text">
            <Link
              to="contact"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
