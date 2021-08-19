import React, { useEffect } from 'react';
import web1 from '../../../images/Portfolio/webDesign.jpg';
import web2 from '../../../images/Portfolio/webDesign2.jpg';
import web3 from '../../../images/Portfolio/webDesign3.jpg';
import webDev1 from '../../../images/Portfolio/webDevelopment.png';
import webDev2 from '../../../images/Portfolio/webDevelopment2.png';
import mobile from '../../../images/Portfolio/MobileApp.png';

import './OurPortfolio.css';
import { useState } from 'react';


const portfolio = [
    {
        "id": 1,
        "image": web1,
        "category1": "webDesign",
        "category2": "branding"
    },
    {
        "id": 2,
        "image": web2,
        "category1": "webDesign",
        "category2": "seo"
    },
    {
        "id": 3,
        "image": web3,
        "category1": "webDesign",
        "category2": "branding"
    },
    {
        "id": 4,
        "image": webDev1,
        "category1": "webDevelopment",
        "category2": "branding"
    },
    {
        "id": 5,
        "image": webDev2,
        "category1": "webDevelopment",
        "category2": "seo"
    },
    {
        "id": 6,
        "image": mobile,
        "category1": "mobile",
        "category2": "branding"
    }
]

const OurPortfolio = () => {

    const [port, setPort] = useState([]);

    useEffect(() => {
        setPort(portfolio);
    }, [])


    return (
        <section className="portfolio">
            <div className="container">
                <h1 className="section-header text-center">Our Portfolio</h1>
                <div className="d-flex justify-content-center mt-3">
                    <div className="short-underLine">
                    </div>
                    <div className="long-underLine">
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <p className=" px-4 py-2 rounded-pill mx-1 fs-5 btn-hover">All</p>
                        <p className=" px-4 py-2 rounded-pill mx-1 fs-5 btn-hover">Web Design</p>
                        <p className=" px-4 py-2 rounded-pill mx-1 fs-5 btn-hover">Web Development</p>
                        <p className=" px-4 py-2 rounded-pill mx-1 fs-5 btn-hover">Branding</p>
                        <p className=" px-4 py-2 rounded-pill mx-1 fs-5 btn-hover">Mobile App</p>
                        <p className=" px-4 py-2 rounded-pill mx-1 fs-5 btn-hover">SEO</p>
                    </div>
                    <div className="row">
                        {
                            port.map(port =>
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <img src={port.image} className="port-image img-fluid" alt=""/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section >
    );
};

export default OurPortfolio;