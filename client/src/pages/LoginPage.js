import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
import '../CSS/Register.css'; // Use the same CSS file as the register page
import '../pages/Commonback.css';

const LoginPage = () => {
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
    };

    axios.defaults.withCredentials = true;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/users/login", formData);

            if (response.data.success) {
                setLoading(false);
                message.success("Login success");

                if (response.data.role === 'admin') {
                    navigate('/admin/dashboard');
                } else {
                    navigate("/");
                }
            }
        } catch (error) {
            setLoading(false);
            if (error.response) {
                if (error.response.status === 401) {
                    message.error("Incorrect username or password");
                } else {
                    message.error("Something went wrong");
                }
            } else {
                message.error("Network error or something unexpected happened");
            }
        }
    };

    const bgImageStyle = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: "#333",
        height: '100%',
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
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Login</h3>
                                    {loading && <Spinner />}
                                    <Form method="POST" onSubmit={handleSubmit}>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                size="lg"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputState}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-4">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                size="lg"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleInputState}
                                            />
                                        </Form.Group>
                                        <div className="mt-2">
                                            <Link to="/reset-password" className="forgot-password-link">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                        <div className="mt-4 pt-2 d-flex justify-content-between align-items-center">
                                            <Button className="btn btn-primary btn-lg" type="submit">
                                                Sign In
                                            </Button>
                                            <div>
                                                Not a member? <Link to="/register">Sign Up</Link>
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

export default LoginPage;
