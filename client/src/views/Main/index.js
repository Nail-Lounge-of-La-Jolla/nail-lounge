import React from "react";
import "./style.css";
import { Link } from "react-scroll";

const MainPage = () => {
  return (
    <div className="row" id="/">
      <div className="col-md">
        <div className="mobile-image"></div>
        <div className="intro-text alignCenter">
          <h2 className="mobile-title">NAIL LOUNGE OF LA JOLLA</h2>
          <br></br>
          <h2 className="intro">Awesome Nail Salon!</h2>
          <br></br>
          <h3>Come get your nails did!.</h3>
          <br></br>
          <br></br>
          <Link to="about"
           activeClass="active"
           spy={true}
           smooth={true}
          >
            <button type="button" className="readMore btn btn-info">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="col-md">
        <div className="right-image"></div>
      </div>
    </div>
  );
}

export default MainPage;