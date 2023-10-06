import './Services.css';




import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section className="services-section">
      <div className="container overflow-hidden">
        <div className="row gy-4 gy-md-5 gy-lg-0 align-items-center">
          <div className="col-12 col-lg-5">
            <div className="row">
              <div className="col-12 col-xl-11">
                <h3 className="fs-6  mb-3 mb-xl-4 text-uppercase text-center">&ndash; &ndash;&ndash; &ndash;&ndash;&ndash; Our Services &ndash; &ndash;&ndash; &ndash;&ndash;&ndash;</h3>
                <h2 className="display-5 mb-3 mb-xl-4">Delivering Efficient Solutions for Your Business</h2>
                <p className="mb-3 mb-xl-4">
                  AAL offers a comprehensive range of services designed to optimize your business operations. Explore our key services below:
                </p>
                <Link to="/services" className="btn bsb-btn-3xl btn-primary rounded-pill">More Details</Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 overflow-hidden">
            <div className="row gy-4">
              <div className="col-12 col-sm-6">
                <div className="card border-0 border-bottom border-primary shadow-sm">
                  <div className="card-body text-center p-4 p-xxl-5">
                    <img src='./ServiceImages/distribution.png' alt="Distribution Management" className="mb-4" width="56" height="56" />
                    <h4 className="mb-4">Distribution Management</h4>
                    <p className="mb-4 text-secondary">
                      Flexible and cost-effective distribution services.
                    </p>
                    <Link to="/services" className="fw-bold text-decoration-none link-primary">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="card border-0 border-bottom border-primary shadow-sm">
                  <div className="card-body text-center p-4 p-xxl-5">
                    <img src='./ServiceImages/procur.png' alt="Procurement Management" className="mb-4" width="56" height="56" />
                    <h4 className="mb-4">Procurement Management</h4>
                    <p className="mb-4 text-secondary">
                      Combined procurement power for cost-effective procurement functions.
                    </p>
                    <Link to="/services" className="fw-bold text-decoration-none link-primary">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="card border-0 border-bottom border-primary shadow-sm">
                  <div className="card-body text-center p-4 p-xxl-5">
                    <img src='./ServiceImages/clearance.png' alt="Clearance of Goods from Customs" className="mb-4" width="56" height="56" />
                    <h4 className="mb-4">Customs Clearance</h4>
                    <p className="mb-4 text-secondary">
                      Swift clearance of goods through customs.
                    </p>
                    <Link to="/services" className="fw-bold text-decoration-none link-primary">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="card border-0 border-bottom border-primary shadow-sm">
                  <div className="card-body text-center p-4 p-xxl-5">
                    <img src='./ServiceImages/order-delivery.png' alt="Order Delivery Management" className="mb-4" width="56" height="56" />
                    <h4 className="mb-4">Delivery Management</h4>
                    <p className="mb-4 text-secondary">
                      Timely and cost-effective order delivery solutions.
                    </p>
                    <Link to="/services" className="fw-bold text-decoration-none link-primary">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
