import React, { useState } from 'react';
import './About.css';

const LandingAbout = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        {
            title: 'Background',
            content: (
                <>
                    <h2>Welcome to AAL  Advancing Indian Logistics</h2>
                    <p>
                        <strong>Aryan-Ankit Logistics </strong> (AAL) is a pioneering force in the world of Express Distribution and supply chain solutions, exclusively dedicated to serving the logistics needs of businesses across India. <strong>Established in 2016 </strong>, AAL has rapidly grown into a dynamic and innovative logistics provider, backed by a team of seasoned professionals committed to exceeding expectations.
                    </p>
                    <p>
                        Our specialization lies in local deliveries, which allows us to offer tailor-made supply chain solutions to our valued clients, delivering a local experience that meets global standards. At AAL, we are dedicated to developing cost-effective distribution solutions that not only reduce distribution costs but also enhance overall efficiency.
                    </p>
                </>
            ),
        },
        {
            title: 'Excellence',
            content: (
                <>
                    <h2>Why Choose AAL?</h2>
                    <h4>Setting New Standards in Logistics Excellence</h4>
                    <p>
                        At AAL, we are driven by a singular goal: to help businesses achieve the best inventory carrying cost and efficient distribution management, ultimately leading to heightened customer satisfaction. We take pride in being a technology-enabled end-to-end logistics management company, providing comprehensive solutions under one roof.
                    </p>
                    <h2>Our Commitment</h2>
                    <h4>Reliable Deliveries, Every Time</h4>
                    <p>
                        When you choose AAL, you can rest assured that your shipments are in safe hands. Our unwavering commitment to reliability ensures that your deliveries reach their destination promptly and securely.
                    </p>
                </>
            ),
        },
        {
            title: 'Vision',
            content: (
                <>
                    <h2>Our Vision</h2>
                    <h4>Shaping the Future of Logistics in India</h4>
                    <p>
                        We envision a logistics landscape in India that's marked by efficiency, innovation, and unparalleled customer service. AAL is at the forefront of this vision, continuously working to redefine and elevate the logistics experience for businesses in India.
                    </p>
                    <h5>Join Us on the Journey
                        Partner with AAL Today
                    </h5>
                    <p>Whether you are a small business looking to streamline your distribution or a large corporation in need of comprehensive logistics solutions, AAL is here to meet your needs. Join us on this journey of innovation and efficiency in Indian logistics.
                    </p>
                </>
            ),
        },
    ];

    return (
        <section className="home-page-container about-box">
            <div className="container">
                <div className="row gy-5 align-items-center">
                    <div className="col-12 col-lg-6 col-xl-5">
                        <img className='about-img img-fluid rounded' loading='lazy' src='./aboutus.jpg' alt='truck' height='100%' width='100%' />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-7">
                        <div className="col-12 ml-4">
                            <h1 className="mb-3 mb-xl-4 text-uppercase text-center">
                                <strong>Welcome to AAL  Advancing Indian Logistics</strong>
                            </h1>
                        </div>

                        <div className="col-12 ml-4">
                            <div className="tabs">
                                {tabs.map((tab, index) => (
                                    <div
                                        key={index}
                                        className={`single-tab ${activeTab === index ? 'active-tab' : ''}`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        <h2>{tab.title}</h2>
                                    </div>
                                ))}
                            </div>
                            <div className="tab-content">
                                <div className="content">{tabs[activeTab].content}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingAbout;
