import React from 'react'
import Layout from '../Components/Layout'

import '../pages/Commonback.css';


const AboutUs = () => {
    const bgImageStlye = {
        // backgroundImage: `url(${pic1.jpg}? :'')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: "#333",
        height: '100%'

    };
    return (
        <Layout>
            <div className=' container-style'>
                <div style={bgImageStlye}>
                    <div className='transparent-backgorunds'></div>
                    <div className="des">
                        <div>
                            <h1>
                                About Us
                            </h1>
                            <p>
                                Discover Our Company's Story and Values
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default AboutUs