import React from 'react';
import { Link } from 'react-router-dom';
import '../Home_About/Home_About.css';

const About = () => {
    return (
        <section className="home-page-container about-box">
            <div className="container">
                <div className="row gy-5 align-items-center">
                    <div className="col-12 col-lg-6 col-xl-5">
                        <img className='about-img img-fluid rounded' loading='lazy' src='./about.jpg' alt='truck' />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-7">
                        <div className="col-12 ml-4">
                            <h3 className="fs-6 mb-3 mb-xl-4 text-uppercase text-center">&ndash; &ndash;&ndash; &ndash;&ndash;&ndash; About Us &ndash; &ndash;&ndash; &ndash;&ndash;&ndash;</h3>
                        </div>

                        <div className="col-12 ml-4">
                            <p className="lead fs-4 text-muted mb-4 font-arial">
                                AAL is a startup company specializing in Express Distribution and supply chain solutions, dedicated to ensuring our clients' businesses stay ahead by customizing solutions to their needs efficiently.
                            </p>
                            <p className="mb-4 font-arial">
                                Established in 2016, AAL is a startup with a strong team of experienced professionals striving to cover all postal codes. Our expertise in local deliveries enables us to provide customized supply chain solutions to all our customers, offering a global standard with a local touch.
                            </p>
                        </div>
                        <div>
                            <Link to="/aboutus" className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
