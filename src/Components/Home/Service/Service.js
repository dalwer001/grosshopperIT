import React from 'react';
import Slider from 'react-slick';
import blueImg1 from '../../../images/logo/logo-blue1.png';
import blueImg2 from '../../../images/logo/logo-blue2.png';
import blueImg3 from '../../../images/logo/logo-blue3.png';
import blueImg4 from '../../../images/logo/logo-blue4.png';
import blueImg5 from '../../../images/logo/logo-blue5.png';
import blueImg6 from '../../../images/logo/logo-blue6.png';
import lightImg1 from '../../../images/logo/logo-light1.png';
import lightImg2 from '../../../images/logo/logo-light2.png';
import lightImg3 from '../../../images/logo/logo-light3.png';
import lightImg4 from '../../../images/logo/logo-light4.png';
import lightImg5 from '../../../images/logo/logo-light5.png';
import lightImg6 from '../../../images/logo/logo-light6.png';

import './Service.css';

const Service = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true
    };


    return (
        <section className="service mb-5">
            <div className="container">
                <Slider {...settings} className="container h-100 mt-3 mb-5">

                    <div className="mx-2">
                        <div className="service-card">
                            <img className="service-img1 p-2" src={blueImg1} alt=""/>
                            <img className="service-img2 p-2" src={lightImg1} alt=""/>
                        </div>
                    </div>

                    <div className="mx-2">
                        <div className="service-card">
                            <img className="service-img1  p-2" src={blueImg2} alt="" />
                            <img className="service-img2  p-2" src={lightImg2} alt="" />
                        </div>
                    </div>

                    <div className="mx-2">
                        <div className="service-card">
                            <img className="service-img1  p-2" src={blueImg3} alt="" />
                            <img className="service-img2  p-2" src={lightImg3} alt="" />
                        </div>
                    </div>

                    <div className="mx-2">
                        <div className="service-card">
                            <img className="service-img1 p-2" src={blueImg4} alt="" />
                            <img className="service-img2 p-2" src={lightImg4} alt="" />
                        </div>
                    </div>

                    <div className="mx-2">
                        <div className="service-card">
                            <img className="service-img1 p-2" src={blueImg5} alt="" />
                            <img className="service-img2 p-2" src={lightImg5} alt="" />
                        </div>
                    </div>

                    <div className="mx-2">
                        <div className="service-card">
                            <img className="service-img1 p-2" src={blueImg6} alt="" />
                            <img className="service-img2 p-2" src={lightImg6} alt="" />
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Service;