import React, { useEffect, useState } from 'react';
import logo from '../../../images/website-logo/logo-white.png';
import logoBlue from '../../../images/website-logo/logo-3.png';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [navbarLogo, setNavbarLogo] = useState(logo);

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })

    const changeLogo = () => {
        if (window.scrollY >= 60) {
          setNavbarLogo(logoBlue)
        } else {
          setNavbarLogo(logo)
        }
      }

      useEffect(() => {
        changeLogo()
        // adding the event when scroll change Logo
        window.addEventListener("scroll", changeLogo)
        
      })

    return (
        <div>
            <nav class={navbar ? "navbar navbar-expand-lg background fixed-top active" : "navbar navbar-expand-lg background navbar navbar-expand-lg background fixed-top"}>
                <div class="container">
                    <a class="navbar-brand p-3" href="#">
                        <img src={logo} alt="" width="100%" height="50%" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggle-icon"><FontAwesomeIcon icon={faBars} /></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li class="nav-item">
                                <a class="nav-link text-light fw-bolder mx-2" aria-current="page" href="#">Home</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle fw-bolder text-light mx-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">About Us</a></li>
                                    <li><a class="dropdown-item" href="#">Faq</a></li>
                                    <li><a class="dropdown-item" href="#">Pricing Table</a></li>
                                    <li><a class="dropdown-item" href="#">Team</a></li>
                                    <li><a class="dropdown-item" href="#">Coming Soon</a></li>
                                    <li><a class="dropdown-item" href="#">Error 404</a></li>
                                    <li><a class="dropdown-item" href="#">Site Down</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle fw-bolder text-light mx-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Services</a></li>
                                    <li><a class="dropdown-item" href="#">Services Details</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle fw-bolder text-light mx-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Blog
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Large Left Sidebar</a></li>
                                    <li><a class="dropdown-item" href="#">Blog Details</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link fw-bolder text-light mx-2" aria-current="page" href="#">Contact Us</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link text-light fw-bolder nav-quote mx-2 px-2" aria-current="page" href="#"><FontAwesomeIcon icon={faChevronRight} className="mx-2 fs-6" />Get A Quote</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;