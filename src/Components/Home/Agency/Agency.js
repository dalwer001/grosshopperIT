import React from 'react';
import pic from '../../../images/about/img6.png';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Agency.css';

const Agency = () => {
    return (
        <section className="container agency">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-md-6">
                    <img src={pic} className="move-pic w-100 img-fluid" alt="" />
                </div>
                <div className="col-sm-12 col-md-6 col-md-6 p-5">
                    <h1 className="section-header">Why Our Agency</h1>
                    <div className="d-flex">
                        <div className="short-underLine">
                        </div>
                        <div className="long-underLine">
                        </div>
                    </div>
                    <p className="agency-text">
                        In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna. Nulla vel maximus risus. Donec volutpat metus lacinia risus accumsan, ac bibendum libero efficitur. Pellentesque nec nisi sit amet magna tempus hendrerit ut a odio.</p>
                    <p className="agency-text">
                        Praesent rhoncus commodo tortor, id pulvinar nisl blandit at. Nulla facilisi. Quisque turpis ante, vehicula condimentum arcu.
                    </p>
                    <div className="row">
                        <div className="col-md-4 text-center counter-div">
                            <CountUp end={9875} start={5243} duration={1} className="counter-text">
                            </CountUp>
                            <p className="counter-text-p">Satisfied Clients</p>
                        </div>
                        <div className="col-md-4 text-center counter-div">
                            <CountUp end={7894} start={6235} duration={1} className="counter-text">
                            </CountUp>
                            <p className="counter-text-p">Project Lunched</p>
                        </div>
                        <div className="col-md-4 text-center counter-div">
                            <CountUp end={65} start={1} duration={1} className="counter-text">
                            </CountUp>
                            <p className="counter-text-p">Years Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Agency;