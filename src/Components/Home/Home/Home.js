import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Agency from '../Agency/Agency';
import Client from '../Client/Client';
import Expertise from '../Expertise/Expertise';
import Features from '../Features/Features';
import Header from '../Header/Header';
import OurPortfolio from '../OurPortfolio/OurPortfolio';
import Plan from '../Plan/Plan';
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
        </div>
    );
};

export default Home;