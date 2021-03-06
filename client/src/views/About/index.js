import React from "react";
import MeOnWater from "../../img/nail-painting-stock-photo.jpeg";
import "./style.css";

const About = () => {

    return (
        <div className="viewThree" id="about">

            <div className="row about-cont">
                <div className="col-md about-left">
                    <img src={MeOnWater} className="about-photo img-fluid" alt="Me"></img>
                </div>

                <div className="col-md about-right">
                    <div className="bioText">
                        <h3 className="viewTitle" id="aboutTitle">ABOUT US</h3>
                        <div className="row align-self-center">
                            <p className="bio"> Located in one of San Diego’s most beautiful communities, the Nail Lounge of La Jolla offers many luxurious spa services in an elegant, tranquil setting. Upon entering the Nail Lounge, you will be greeted by a member of the friendly, professional staff, who will gladly bring you a cup of soothing tea or refreshing water to enjoy as you treat yourself to an array of relaxing and renewing treatments.</p>
                            <p className="bio"><span className="skillHeader">Our Guarantee</span>
                            <p className="bio"> To give you peace of mind, the Nail Lounge of La Jolla uses Rinato spa chairs, which have Clean Touch™ Pipe Free technology by European Touch. This technology offers the highest level of hygiene in the industry. In addition, the Nail Lounge sterilizes equipment in a high-pressure steam autoclave. You can always rest assured that your treatments are the most hygienic possible.</p>
                            </p>
                            <p className="bio">We look forward to servicing you!</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <img src="https://images.squarespace-cdn.com/content/v1/5c69d8e3c46f6d34a4877a0a/1554329056617-SUR6GUOZXBKHAYNQCM16/sand-header.jpg?format=2500w" className="sand" alt="sannd"></img>
        </div>
        
    )
}

export default About;