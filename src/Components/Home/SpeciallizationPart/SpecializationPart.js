import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './SpecializationPart.css';
import picBg from './../../../assests/svg/card.svg';
import pic1 from './../../../assests/svg/comp1.svg';
import pic2 from './../../../assests/svg/comp2.svg';
import pic3 from './../../../assests/svg/comp3.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const specializationData = [
    {
        'id': 1,
        'title': 'Strategy & Research',
        'description': 'Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.',
        'bg':picBg,
        'pic':pic1
    },
    {
        'id': 2,
        'title': 'Web Development',
        'description': 'Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.',
        'bg':picBg,
        'pic':pic2
    },
    {
        'id': 3,
        'title': 'Web Solution',
        'description': 'Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.',
        'bg':picBg,
        'pic':pic3
    }
]

const SpecializationPart = () => {
    const [special, setSpecial] = useState([]);
    useEffect(() => {
        setSpecial(specializationData);
    }, [])
    return (
        <section className="container">
            <h1 className="section-header text-center">Our Speciallization</h1>
            <div className="d-flex justify-content-center mt-3">
                <div className="short-underLine">
                </div>
                <div className="long-underLine">
                </div>
            </div>

            <div className="row mb-5">
                {
                    special.map(data =>
                        <div className="col-sm-12 col-md-6 col-lg-4 mb-5">
                            <div class="card border-0" style={{width:'25rem'}}>
                                <div className="card-img-top d-flex align-items-center">
                                <img src={data.bg} class="card-bg card-img-top" alt="..." />
                                <img src={data.pic} class="card-pic card-img-top" alt="" />
                                </div>
                                <div class="card-body text-center mb-4">
                                    <h5 class="card-title">{data.title}</h5>
                                    <p class="card-text">{data.description}</p>
                                    <a href="#" class="arrow-design"><FontAwesomeIcon icon={faChevronRight} className="mx-2" /></a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default SpecializationPart;