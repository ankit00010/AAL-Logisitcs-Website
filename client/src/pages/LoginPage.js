import { Modal, Form, Button, Col, Row, Spinner } from 'react-bootstrap';
import '../CSS/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';



const LoginPage = ({ show, handleClose }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputState = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({ ...formData, [name]: value });
    }
    axios.defaults.withCredentials = true;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/users/login", formData);

            if (response.data.success) {
                setLoading(false);

                message.success("login success");
                if (response.data.role === 'admin') {
                    navigate('/admin/dashboard');
                }
                else {

                    navigate("/");
                }
                handleClose();
            }
        } catch (error) {
            setLoading(false);
            if (error.response) {
                // Check the status code to determine the type of error
                if (error.response.status === 401) {
                    // Unauthorized (incorrect username or password)
                    message.error("Incorrect username or password");
                }

                else {
                    // Handle other errors as needed
                    message.error("Something went wrong");
                }
            } else {
                // Network error or other unexpected errors
                message.error("Network error or something unexpected happened");
            }
        }
    };



    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {loading && <Spinner />}
                    <Form method='POST' onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={12} className="mb-4">
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        size="lg"
                                        name='email'
                                        value={formData.email}
                                        onChange={handleInputState}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12} className="mb-4">
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        size="lg"
                                        name='password'
                                        value={formData.password}
                                        onChange={handleInputState}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="mt-2">
                            <Link to="/reset-password" className="forgot-password-link">
                                Forgot Password?
                            </Link>
                        </div>

                        <div className="mt-3">
                            Not a member? <Link to="/register">Sign Up</Link>
                        </div>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className="login-modal">
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>Login</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default LoginPage;
