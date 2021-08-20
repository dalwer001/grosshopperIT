import React from 'react';
import hero from '../../../assests/svg/hero.svg';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <img src={hero} className="w-100 img-fluid p-3 move-pic" alt="" />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">

                        <form class="row g-3 p-5 contact-form">
                            <h1 className="section-header">Get In Touch With Us</h1>
                            <div className="d-flex">
                                <div className="short-underLine">
                                </div>
                                <div className="long-underLine">
                                </div>
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control border-0" id="name" placeholder="Full Name" required/>
                            </div>
                            <div class="col-md-12">
                                <input type="email" class="form-control border-0" id="inputEmail4" placeholder="Email Address" required/>
                            </div>
                            <div class="col-md-12">
                                <input type="text" class="form-control border-0" id="inputEmail4" placeholder="Phone No." required/>
                            </div>

                            <div class="col-md-6">
                                <input type="title" class="form-control border-0" id="Project Title" placeholder="Project Title" required/>
                            </div>
                            <div class="col-md-6">
                                <select id="inputState" class="form-select required border-0">
                                    <option selected>Choose Service</option>
                                    <option>Web Development</option>
                                    <option>Web Design</option>
                                    <option>Strategy & Research</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <textarea name="message" id="message" className="form-control border-0" placeholder="Message" required></textarea>
                            </div>
                            <div class="col-md-12">
                                <button type="submit" class="contact-btn">Submit Now</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;