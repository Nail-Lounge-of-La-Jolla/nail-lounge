import React from "react";
import services from "../../services.json";
import TechListItem from "../TechListItem";
import "./style.css";
import Accordion from "react-bootstrap/Accordion"



function ServiceList() {
  // const open=[open, openState] = useState(false);

  function checkRepoLink(service) {
    console.log("inside repo function")
    if (service.repo !== null) {
      return (
        <div className="row">
          {/* <div className="col-sm text-center">
            <a className="repoLink" href={service.repo} target="_blank">
              <button type="button" className="btn btn-info repoBtn">
                Code
              </button>
            </a>
          </div> */}
          <div className="col-sm text-center">
          <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>View Services</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>

</Accordion>
            
          </div>
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
                <ul className="technologies">
                  {/* <TechListItem techItems={service.technologies}></TechListItem> */}
                </ul>
              </div>
              {checkRepoLink(service)}
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
