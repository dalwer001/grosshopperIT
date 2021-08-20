import React from 'react';
import logo from '../../../../images/website-logo/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faPhoneAlt,faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './FooterDetails.css';

const FooterDetails = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <img src={logo} className="w-50 img-fluid mb-5" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet blanditiis tempore debitis minus dolore, maiores aspernatur voluptatum nulla, facere itaque ducimus dignissimos unde, officiis libero?</p>
                            <div className="d-flex mx-2">
                                <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} className="icon-design rounded-circle fs-1 p-2" /></a>
                                <a href="https://instagram.com/"><FontAwesomeIcon icon={faInstagram} className="icon-design rounded-circle fs-2 p-2" /></a>
                                <a href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} className="icon-design rounded-circle fs-2 p-2" /></a>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-2">
                        <h4 className="fw-bold">Our Links</h4>
                        <div className="d-flex">
                            <div className="footer-short-underLine">

                            </div>
                            <div className="footer-long-underLine">

                            </div>
                        </div>
                        <div>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />Home</p></a>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />About Us</p></a>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />Services</p></a>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />Team</p></a>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />Blog</p></a>
                        </div>
                    </div>



                    <div className="col-md-2">
                        <h4 className="fw-bold">Our Services</h4>
                        <div className="d-flex">
                            <div className="footer-short-underLine">

                            </div>
                            <div className="footer-long-underLine">

                            </div>
                        </div>
                        <div>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />Strategy & Research</p></a>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />Web Development</p></a>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />Web Solution</p></a>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />Digital Marketing</p></a>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />App Design</p></a>
                        </div>
                    </div>




                    <div className="col-md-2">
                        <h4 className="fw-bold">Other Links</h4>
                        <div className="d-flex">
                            <div className="footer-short-underLine">

                            </div>
                            <div className="footer-long-underLine">

                            </div>
                        </div>
                        <div>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />FAQ</p></a>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />Portfolio</p></a>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />Privacy Policy</p></a>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />Terms & Conditions</p></a>
                            <a href="#" className="text-decoration-none text-light"><p><FontAwesomeIcon icon={faChevronRight} className="me-2 fs-6" />Support</p></a>
                        </div>
                    </div>



                    <div className="col-md-2">
                        <h4 className="fw-bold">Contact Us</h4>
                        <div className="d-flex">
                            <div className="footer-short-underLine">

                            </div>
                            <div className="footer-long-underLine">

                            </div>
                        </div>
                        <div>
                            <div className="d-flex">
                                <div className="me-2 mt-2">
                                    <FontAwesomeIcon icon={faPhoneAlt} className="contact-design rounded-circle fs-1 p-2" />
                                </div>
                                <div>
                                    <p>+91 123-456-7890 +91 987-654-3210</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="me-2 mt-2">
                                    <FontAwesomeIcon icon={faEnvelope} className="contact-design rounded-circle fs-1 p-2" />
                                </div>
                                <div>
                                    <p>info@example.com
                                        info@example.com</p>
                                </div>
                            </div>

                            <div className="d-flex">
                                <div className="me-3 mt-2">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-design rounded-circle fs-1 p-2" />
                                </div>
                                <div>
                                    <p>Marmora Road Chi Minh City, Vietnam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterDetails;