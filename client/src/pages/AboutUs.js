import React from 'react'

import '../pages/Commonback.css';


const AboutUs = () => {
    const bgImageStlye = {
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
                            About Us
                        </h1>
                        <p>
                            Discover Our Company's Story and Values
                        </p>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default AboutUs