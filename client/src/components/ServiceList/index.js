import React from "react";
import services from "../../services.json";
import "./style.css";
import Accordion from "react-bootstrap/Accordion"
import  useAccordionButton  from 'react-bootstrap/AccordionButton';
import AccordionContext from "react-bootstrap/Card"




function ServiceList() {
  // const open=[open, openState] = useState(false);

  function checkRepoLink(service) {
    console.log("inside repo function")
    if (service.repo !== null) {
      return (
        <div className="row">

          
        </div>

        // <Service />
      );
    } else {
      return (
      <div className="row">
        <div className="col-sm">
        <a className="siteLink" href={service.site} target="_blank"><button type="button" className="btn btn-info siteBtn">View Services</button></a>
        </div>
      </div>
      );
    }
  };

  return services.map((service) => {
    return ( <div className="row">
      <div className="card mb-5 serviceCard">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 my-auto">
              <img
                src={service.image}
                alt={service.title}
                width="200px"
                className="card-img img-fluid logo"
              />
            </div>
            <div className="col-md-9">
              <h4 className="card-title">{service.title}</h4>
              <div className="row card-text">
                <p>{service.about}</p>
              </div>
              {checkRepoLink(service)}
            </div>
            <div className="col-sm text-center">
              <Accordion defaultActiveKey="0">
              <Accordion.Item>
                <Accordion.Header>View Services</Accordion.Header>
                <Accordion.Body>
                
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>
            
          </div>
          </div>
          
        </div>
      </div>
    </div>
    );
  });
}
//need to import the reactstrap button (1 for site, 1 for repo, 1 for the toggle)

export default ServiceList;
