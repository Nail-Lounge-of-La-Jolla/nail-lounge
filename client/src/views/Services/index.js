import React from "react";
import "./style.css";
import ServiceList from "../../components/ServiceList"
import { useQuery } from '@apollo/client'
import { QUERY_ALL_SERVICES } from '../../utils/queries'

const Services = () => {

    const { loading, data } = useQuery(QUERY_ALL_SERVICES)
    console.log(loading, data)

    return ( loading ?
            (
                <div>loading...</div>
            )

            :

            (        <div className="viewTwo" id="services">
            <div className="row">
                <div className="col-md">
                    <h3 className="viewTitle" id="servicesTitle">Services</h3>
                </div>
            </div>
            <div className="row">
            
                <ServiceList services={data.services} />
            </div>
        </div>)
    ) 
}

export default Services;