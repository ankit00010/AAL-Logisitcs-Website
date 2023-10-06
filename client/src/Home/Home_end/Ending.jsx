import React from 'react';
import { Link } from 'react-router-dom';
import './Ending.css'; // Import the CSS file

const Ending = () => {
  return (
    <div className="container-end">
      <div className="img-container-end">
        <img src="./sunset.jpg" alt="Sunset" className="cover-image" />
        <div className="image-overlay">
        <h3 className="fs-6  mb-3 mb-xl-4 text-uppercase">&ndash; &ndash;&ndash; &ndash;&ndash;&ndash; Get in touch with us &ndash; &ndash;&ndash; &ndash;&ndash;&ndash;</h3>
          <div className="text-container-end">
            <h1>
              Looking for <strong>best logistic transport services</strong>?
            </h1>
          </div>
          <div className="link-container-end">
            <Link to="/book" className="btn btn-primary">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ending;
