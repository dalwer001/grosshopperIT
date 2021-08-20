import React from 'react';
import Desclaimer from '../Desclaimer/Desclaimer';
import FooterDetails from '../FooterDetails/FooterDetails';

const Footer = () => {
    return (
        <div className="mt-5">
            <FooterDetails/>
            <Desclaimer/>
        </div>
    );
};

export default Footer;