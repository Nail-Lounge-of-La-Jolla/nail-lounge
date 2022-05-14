import React from "react";
import "./style.css";
import ServiceList from "../../components/ServiceList";

function Services() {

    return (
        <div className="viewTwo" id="services">
            <div className="row">
                <div className="col-md">
                    <h3 className="viewTitle" id="servicesTitle">Services</h3>
                </div>
            </div>
            <div className="row">
                <ServiceList />
            </div>
        </div>
    )
}

export default Services;