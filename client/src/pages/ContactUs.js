import React from 'react';
import '../CSS/Commonback.css';
import { FaEnvelope, FaPhone, FaMapMarker, FaClock, FaComments } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className="about-us-container">
            <div className="transparent-backgrounds"></div>
            <div className="about-us-background">
                <div className="about-us-content text-center">
                    <h1>Contact Us</h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <section className="contact-section">
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-md-6">
                                    <div className="contact-info">
                                        <h2>Contact Information</h2>
                                        <ul className="list-unstyled">
                                            <li><FaEnvelope /> Email: aal@gmail.com</li>
                                            <li><FaPhone /> Phone: +91 91XXXXXXXX</li>
                                            <li><FaMapMarker /> Address:  xyz</li>
                                            <li><FaClock /> Business Hours: Monday-Saturday: 9:00 AM - 6:00 PM</li>
                                            <li><FaComments /> Response Time: We typically respond to inquiries within 24 hours.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-info text-center">
                                        <h3>If you have any questions or need assistance, feel free to get in touch with us.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
