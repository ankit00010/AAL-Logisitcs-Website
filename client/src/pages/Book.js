import React from 'react'

import '../pages/Commonback.css';


const Book = () => {
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
                            Book Logistics
                        </h1>
                        <p>
                            Book Your Services Here
                        </p>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Book;