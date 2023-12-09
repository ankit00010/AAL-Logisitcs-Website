import React from 'react';
import '../CSS/Commonback.css';
import ServiceLanding from '../Components/Service_landing/ServiceLanding';
const Services = () => {
    return (
        <div className="about-us-container">
            <div className="transparent-backgrounds"></div>
            <div className="about-us-background">
                <div className="about-us-content">
                    <h1>Our Services</h1>
                    <ServiceLanding />

                </div>
            </div>
        </div>
    );
}

export default Services;
