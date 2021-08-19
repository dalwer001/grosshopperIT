import React from 'react';
import headerImg from '../../../images/main-slider/slider3/pic1.png';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-bg">
            <Navbar/>
            <div className="container mb-5">
                <div className="row d-flex align-items-center p-5">
                    <div className="col-md-6 mt-5">
                        <p className="text-warning fw-bold">We Are Product Designer From India</p>
                        <h3 className="text-light fw-bolder">We Design Interfaces That Users Love</h3>
                        <p className="text-light">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus.</p>
                        <p className="header-btn p-3 text-center text-light fw-bolder">Learn More</p>
                    </div>
                    <div className="col-md-6 mt-5">
                        <img className="move-pic w-100 img-fluid" src={headerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;