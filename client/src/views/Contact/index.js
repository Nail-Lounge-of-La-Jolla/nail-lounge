import React from "react";
import SocialLinks from "../../components/SocialLinks";
import "./style.css";

const Contact = () => {
  return (
    <div className="viewFive" id="contact">
      <div className="row contact-row">

        <div className="formDiv" id="contact">
          <h3 className="viewTitle" id="contactTitle">
            <span className="contact"> HOW TO REACH US </span>
            <p> Phone: (858) 456-7171 </p>
            <p> Address: 7514 Girard Ave #30, La Jolla, CA 92037 </p>

            <span className="contact"> Hours of Operation: </span>
            <p> Monday-Saturday: 9 AM - 7 PM </p>
            <p> Sunday: 10 AM - 6 PM </p>
          </h3>
          <hr></hr>
          {/* <ContactForm /> */}
          <SocialLinks />
        </div>

      </div>
    </div>
  );
}

/*
var theAPIKey = "AIzaSyDOMN81rdwuBhMumvIzCr05WNqwzhV5OI8";
var theAPI='https://maps.googleapis.com/maps/api/js?key='+theAPIKey.toString()+'&callback=initMap';
document.body.innerHTML=`<div id='map-canvas' style='width:500px; height:500px;'></div>`;

function initMap() {
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(32.84103017095018, -117.27256999689892)
  };
  var map= new google.maps.Map(document.getElementById('map-canvas'),
  mapOptions);
};

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = theAPI;
  document.body.appendChild(script);
}

window.onload = loadScript;
*/

export default Contact;
