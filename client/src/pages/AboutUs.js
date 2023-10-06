import React from 'react';
import '../CSS/Commonback.css';
import Landing_about from '../Components/About/Landing_about';
const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="transparent-backgrounds"></div>
            <div className="about-us-background">
                <div className="about-us-content">
                    <h1>About Us</h1>
                    <Landing_about />
                </div>

            </div>
        </div>
    );
}

export default AboutUs;
