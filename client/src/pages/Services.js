import React from 'react';
import '../CSS/Commonback.css';
import Service_landing from '../Components/Service_landing/Service_landing';
const Services = () => {
    return (
        <div className="about-us-container">
            <div className="transparent-backgrounds"></div>
            <div className="about-us-background">
                <div className="about-us-content">
                    <h1>Our Services</h1>
                    <Service_landing />

                </div>
            </div>
        </div>
    );
}

export default Services;
