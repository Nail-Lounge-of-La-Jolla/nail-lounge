import React from "react";
import services from "../../services.json";
import TechListItem from "../TechListItem";

// need to change the list items for the technologies to a function
// probably should break this down into further components, at least for the list and then pass the data
// image links should be hosted so they're consistent
// should these be rendered as cards ?
// change this so that all images render on one side
function Service() {
    return services.service.map(service => {
        // service is an even number, it will image left and text right
        // if (services.indexOf(service) === 0 || services.indexOf(service) %2 === 0 ) {
            return (
                <div className="row serviceRow">
                    <div className="col-md-8">
                        <h4 className="serviceTitle">{service.details.title}</h4>
                    </div>
                    <div className="col-md-8">
                        <h4 className="serviceTitle">{service.details.price}</h4>
                    </div>
                </div>
            )
            // otherwise image will be right and text left
        // } else {
        //     return (
        //         <div className="row serviceRow">
        //             <div className="col-md-8">
        //             <h4 className="serviceTitle">{service.title}</h4>
        //             <p className="serviceAbout">{service.about}</p>
        //             <ul className="technologies">
        //                 <TechListItem techItems={service.technologies}></TechListItem>
        //             </ul>
        //                 <div className="row">
        //                     <button type="button" className="btn btn-info"><a className="repoLink" href={service.repo}>Repo</a></button>
        //                 </div>
        //             </div>
        //             <div className="col-md-4">
        //                 <img src={service.image} alt={service.title} width="200px"></img>
        //             </div>
        //         </div>
        //     )
        // }
    })
}

export default Service;