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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post("/users/login", formData);
            setLoading(false);
            message.success("login success");
            handleClose();
            navigate("/");
        } catch (error) {
            setLoading(false);
            message.error("something went wrong");
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
