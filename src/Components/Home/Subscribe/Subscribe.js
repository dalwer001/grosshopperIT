import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <section className="subscribe mb-5">
            <div className="container ">
                <div className="row d-flex align-items-center">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <h1 className="fw-bolder">Subscribe To Our Newsletter For Latest Update Of New Products</h1>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <form>
                            <input type="email" className="form-control form-style border-0" placeholder="Email Address" required />
                            <button className="subscribe-btn">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;