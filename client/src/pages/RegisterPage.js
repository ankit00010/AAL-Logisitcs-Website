import { useState } from 'react';
import '../CSS/Register.css'
import { Form, Button, Col, Row, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { message } from 'antd';

const RegisterPage = () => {


  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    salutation: 'Mr',
    fname: '',
    lname: '',
    email: '',
    contact: '',
    password: '',
    cpassword: '',
    organization: '',
    country: 'India'



  });
  // To handle the change state 

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };
  // To handle the form submition function
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("/users/register", formData);
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(formData);

      setLoading(false);
      message.error("something went wrong");
    }
  };

  const bgImageStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: "#333",
    height: '100vh',
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className='register-backgorunds'></div>
      <div style={bgImageStyle}>
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                  {loading && <Spinner />}
                  <Form method='POST' onSubmit={submitHandler}>
                    <Row>
                      <Col sm={6} className="mb-4">
                        <Form.Group>
                          <Form.Label>Please select salutation</Form.Label>
                          <Form.Control as="select" size="lg" name='salutation' value={formData.salutation} onChange={handleInputChange} >
                            <option>Miss</option>
                            <option>Ms</option>
                            <option>Mr</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Form.Group>
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="text" name='fname' size="lg" value={formData.fname} onChange={handleInputChange} required />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={6} className="mb-4 d-flex align-items-center">
                        <Form.Group>
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" name='lname' size="lg" value={formData.lname} onChange={handleInputChange} required />
                        </Form.Group>
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" name='email' size="lg" value={formData.email} onChange={handleInputChange} required />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={6} className="mb-4">
                        <Form.Group>
                          <Form.Label>Contact</Form.Label>
                          <Form.Control type="text" name='contact' size="lg" value={formData.contact} onChange={handleInputChange} required />
                        </Form.Group>
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Form.Group>
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" name='password' size="lg" value={formData.password} onChange={handleInputChange} required />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={6} className="mb-4">
                        <Form.Group>
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control type="password" name='cpassword' size="lg" value={formData.cpassword} onChange={handleInputChange} required />
                        </Form.Group>
                      </Col>
                      <Col sm={6} className="mb-4">
                        <Form.Group>
                          <Form.Label>Organization</Form.Label>
                          <Form.Control type="text" size="lg" name='organization' value={formData.organization} onChange={handleInputChange} required />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={12}>
                        <Form.Group>
                          <Form.Label>Country</Form.Label>
                          <Form.Control as="select" name='country' size="lg" value={formData.country} onChange={handleInputChange} >
                            <option>India</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>

                    <div className="mt-4 pt-2 d-flex justify-content-between align-items-center">


                      <Button className="btn btn-primary btn-lg" type="submit">Sign Up</Button>


                      <div>
                        Already a member? <Link to="/login">Sign In</Link>

                      </div>
                    </div>




                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
