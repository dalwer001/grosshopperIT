import React from 'react';
import pic from '../../../images/about/img7.png';
import idea from '../../../assests/svg/idea.svg';
import desgin from '../../../assests/svg/design.svg';
import development from '../../../assests/svg/development.svg';
import testing from '../../../assests/svg/testing.svg';
import './Features.css';

const Features = () => {
    return (
        <section className="container feature">
            <h1 className="section-header text-center">Features</h1>
            <div className="d-flex justify-content-center mt-3">
                <div className="short-underLine">
                </div>
                <div className="long-underLine">
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-12">
                            <div className="d-flex">
                                <div>
                                    <img src={idea} className="feature-card-img img-fluid" alt="" />
                                </div>
                                <div className="feature-card-body">
                                    <h3 className="feature-card-header">Idea & Analysis</h3>
                                    <p className="feature-card-text">Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-12">
                            <div className="d-flex">
                                <div>
                                    <img src={desgin} className="feature-card-img img-fluid" alt="" />
                                </div>
                                <div className="feature-card-body">
                                    <h3 className="feature-card-header">Designing</h3>
                                    <p className="feature-card-text">Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                    <img src={pic} className="move-pic w-100 img-fluid" alt="" />
                </div>

                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-12">
                            <div className="d-flex">
                                <div>
                                    <img src={development} className="feature-card-img img-fluid" alt="" />
                                </div>
                                <div className="feature-card-body">
                                    <h3 className="feature-card-header">Development</h3>
                                    <p className="feature-card-text">Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-12">
                            <div className="d-flex">
                                <div>
                                    <img src={testing} className="feature-card-img img-fluid" alt="" />
                                </div>
                                <div className="feature-card-body">
                                    <h3 className="feature-card-header">Testing & Lunching</h3>
                                    <p className="feature-card-text">Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Features;