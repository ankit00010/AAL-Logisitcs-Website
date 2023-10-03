import React from 'react'

import '../pages/Commonback.css';




const ContactUs = () => {
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
                            Contact Us
                        </h1>
                        <p>
                            Get in Touch with Us for Any Inquiries or Assistance
                        </p>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default ContactUs;