import React, { useEffect, useState } from 'react';
import './Expertise.css';
import Slider from 'react-slick';
import pic1 from '../../../images/team/small/pic1.jpg';
import pic2 from '../../../images/team/small/pic2.jpg';
import pic3 from '../../../images/team/small/pic3.jpg';
import pic4 from '../../../images/team/small/pic4.jpg';


const expertise = [
    {
        "id": 1,
        "title": 'John Doe',
        "designation": 'Senior Designer',
        "pic": pic1

    },
    {
        "id": 2,
        "title": 'Emily Smith',
        "designation": 'Senior Designer',
        "pic": pic2
    },
    {
        "id": 3,
        "title": 'Blake Run',
        "designation": 'Senior Designer',
        "pic": pic3
    },
    {
        "id": 4,
        "title": 'Jenna Smith',
        "designation": 'Senior Designer',
        "pic": pic4
    },

    {
        "id": 5,
        "title": 'John Doe',
        "designation": 'Senior Designer',
        "pic": pic1

    },
    {
        "id": 6,
        "title": 'Emily Smith',
        "designation": 'Senior Designer',
        "pic": pic2
    },
    {
        "id": 7,
        "title": 'Blake Run',
        "designation": 'Senior Designer',
        "pic": pic3
    },
    {
        "id": 8,
        "title": 'Jenna Smith',
        "designation": 'Senior Designer',
        "pic": pic4
    },

    {
        "id": 9,
        "title": 'John Doe',
        "designation": 'Senior Designer',
        "pic": pic1

    },
    {
        "id": 10,
        "title": 'Emily Smith',
        "designation": 'Senior Designer',
        "pic": pic2
    },
    {
        "id": 11,
        "title": 'Blake Run',
        "designation": 'Senior Designer',
        "pic": pic3
    },
    {
        "id": 12,
        "title": 'Jenna Smith',
        "designation": 'Senior Designer',
        "pic": pic4
    },
]

const Expertise = () => {

    const [expert, setExpert] = useState([]);

    useEffect(() => {
        setExpert(expertise);
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true
    };

    return (
        <section className="expertise">
            <div className="container mb-5">
                <h1 className="section-header text-center">Our Expertise</h1>
                <div className="d-flex justify-content-center mt-3">
                    <div className="short-underLine">
                    </div>
                    <div className="long-underLine">
                    </div>
                </div>
                <Slider {...settings} className="container h-100 mt-3 mb-5">
                    {
                        expert.map(expert =>
                            <div className="text-center expert-card">
                                <div>
                                <img className="img-fluid slider-pic w-100 h-100 p-2" src={expert.pic} alt="" />
                                </div>
                                <div>
                                    <a href="#" className="expert-title mt-2 text-decoration-none">{expert.title}</a>
                                    <h6 className="expert-text">{expert.designation}</h6>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </section>
    );
};

export default Expertise;