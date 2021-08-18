import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Agency from '../Agency/Agency';
import Features from '../Features/Features';
import Header from '../Header/Header';
import OurPortfolio from '../OurPortfolio/OurPortfolio';
import SpecializationPart from '../SpeciallizationPart/SpecializationPart';

const Home = () => {
    return (
        <div>
            <Header/>
            <SpecializationPart/>
            <Agency/>
            <Features/>
            <OurPortfolio/>
        </div>
    );
};

export default Home;