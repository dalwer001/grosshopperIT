import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import pic1 from '../../../images/testimonials/pic1.jpg';
import pic2 from '../../../images/testimonials/pic3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './Client.css';

const clientData = [
    {
        "img": pic1,
        "name": "Cak Dikin",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        "img": pic2,
        "name": "Cak Dikin",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        "img": pic1,
        "name": "Cak Dikin",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        "img": pic2,
        "name": "Cak Dikin",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    }
]

const Client = () => {

    const [client, setClient] = useState([]);
    useEffect(() => {
        setClient(clientData);
    }, [])


    var settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <section className="client">
            <div className="container mb-5">
                <h1 className="section-header text-center">What Our Clients Say’s</h1>
                <div className="d-flex justify-content-center mt-3">
                    <div className="short-underLine">
                    </div>
                    <div className="long-underLine">
                    </div>
                </div>
                <div className="row px-5 py-2">
                    <Slider {...settings}>
                        {
                            client.map(client =>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div>
                                        <img className="img-fluid rounded-circle client-img" src={client.img} alt="" />
                                        <FontAwesomeIcon icon={faQuoteRight} className="client-icon" />
                                    </div>
                                    <div className="p-5">
                                        <p className="client-text">{client.description}</p>
                                        <div className="d-flex align-items-center">
                                            <div className="client-hypen">
                                            </div>
                                            <div>
                                                <h5 className="client-name m-2 fw-bold fs-6">{client.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Client;