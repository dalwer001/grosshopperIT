import React from 'react';
import './Desclaimer.css';

const Desclaimer = () => {
    return (
        <div className="declaimer">
            <div className="container">
                <p className="text-center text-light fw-bold my-2">Copyright {'\u00a9'} 2021 DexignZone. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Desclaimer;