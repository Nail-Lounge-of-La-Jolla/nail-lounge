import React from "react";
import "./style.css";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = (props) => {
  const clickHandler = (event) => {
    const id = event.target.id
    props.setPage(id)
}
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
              onClick={clickHandler}
              id="services"
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
              onClick={clickHandler}
              id="about"
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
              onClick={clickHandler}
              id="main"
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
              onClick={clickHandler}
              id="book"
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
              onClick={clickHandler}
              id="contact"
            >
              CONTACT
            </Link>
          </li>
          <a href="https://www.instagram.com/naillounge_lajolla/?igshid=YmMyMTA2M2Y=" target="_blank"><i class="fab fa-instagram fa-3x"></i></a>
        </ul>
      </div>
    
    </nav>
  );
  
}

export default NavBar;
