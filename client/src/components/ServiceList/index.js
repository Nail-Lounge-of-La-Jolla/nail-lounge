import React from "react";
import "./style.css";
import Accordion from "react-bootstrap/Accordion";
// import  useAccordionButton  from 'react-bootstrap/AccordionButton';
// import AccordionContext from "react-bootstrap/Card";

function ServiceList({ services }) {
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

  let current_category = {}
  let categories = services.filter( (service) => {
    console.log(service, current_category)
    if(service.category.name === current_category[service.category.name]) {
      return false 
    } else {
      current_category[service.category.name] = service.category.name
      return true
    }
  })

  console.log("the categories are", categories)

  let newCategories = categories.map( (category) => {
    let newCategory = { name : category.category.name, image: category.category.image, description: category.category.description }
    newCategory.services = []
    services.map( (service) => {
      if(category.category.name === service.category.name) {
        newCategory.services.push(service)
      }
    })
    return newCategory
  })

  console.log("the new categories are ", newCategories )

  return newCategories.map((category) => {
    return ( <div className="row">
      <div className="card mb-5 serviceCard">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 my-auto">
              <img
                src={category.image}
                alt={category.name}
                width="200px"
                className="card-img img-fluid logo"
              />
            </div>
            <div className="col-md-9 card-cont">
              <h4 className="card-title">{category.name.toUpperCase()}</h4>
              <div className="row card-text">
                <p>{category.description}</p>
              </div>
       
            </div>
            <div className="col-sm text-center">
              <Accordion defaultActiveKey="0">
              <Accordion.Item>
                <Accordion.Header>View Services</Accordion.Header>
                <Accordion.Body >
                  {
                    category.services.map( (service) => {
                  
                      return ( <div className="acc-cont"> 
                        <p className="acc-row">{ service.name } </p>
                        <p className="acc-row">$ { service.price  }</p> 
                      </div> )
                    })
                  }
             
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
