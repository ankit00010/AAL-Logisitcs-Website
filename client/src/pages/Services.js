import React from 'react'
import Layout from '../Components/Layout'

import '../pages/Commonback.css';




const Services = () => {
    const bgImageStlye = {
        // backgroundImage: `url(${pic1.jpg}? :'')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: "#333",
        height: '100%'

    };
    return (
        <div className=' container-style'>
            <div style={bgImageStlye}>
                <div className='transparent-backgorunds'></div>
                <div className="des">
                    <div>
                        <h1>
                            Our Services
                        </h1>
                        <p>
                            Explore Our Comprehensive Range of Logistics Services
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Services;