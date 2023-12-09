import React from 'react';
import '../CSS/Commonback.css';
import LandingAbout from '../Components/About/LandingAbout';
const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="transparent-backgrounds"></div>
            <div className="about-us-background">
                <div className="about-us-content">
                    <h1>About Us</h1>
                    <LandingAbout />
                </div>

            </div>
        </div>
    );
}

export default AboutUs;
