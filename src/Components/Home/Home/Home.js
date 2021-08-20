import React from 'react';
import Agency from '../Agency/Agency';
import Blog from '../Blog/Blog';
import Client from '../Client/Client';
import Contact from '../Contact/Contact';
import Expertise from '../Expertise/Expertise';
import Features from '../Features/Features';
import Header from '../Header/Header';
import OurPortfolio from '../OurPortfolio/OurPortfolio';
import Plan from '../Plan/Plan';
import Service from '../Service/Service';

import SpecializationPart from '../SpeciallizationPart/SpecializationPart';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Header/>
            <SpecializationPart/>
            <Agency/>
            <Features/>
            <OurPortfolio/>
            <Subscribe/>
            <Expertise/>
            <Plan/>
            <Client/>
            <Blog/>
            <Service/>
            <Contact/>
        </div>
    );
};

export default Home;