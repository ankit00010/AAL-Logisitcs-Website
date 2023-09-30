import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Layout from '../Components/Layout'
import '../CSS/Background.css';


const Book = () => {
    const bgImageStlye = {
        // backgroundImage: `url(${pic1.jpg}? :'')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: "#333",
        height: '100%'
    }
    const [senderInfo, setSenderInfo] = useState({
        senderName: '',
        senderContact: '',
        senderEmail: '',
        senderAddress: '',
        senderCity: '',
        senderPincode: '',
    });

    const [receiverInfo, setReceiverInfo] = useState({
        receiverName: '',
        receiverContact: '',
        receiverAddress: '',
        receiverCity: '',
        receiverPincode: '',
    });

    const [shipmentDetails, setShipmentDetails] = useState({
        vehicleType: '',
        hsnCode: '',
        weight: '',
        description: '',
        specialInstructions: '',
    });

    const [pickupDeliveryPreferences, setPickupDeliveryPreferences] = useState({
        preferredPickupDate: '',
        preferredPickupTime: '',
        preferredDeliveryDate: '',
        preferredDeliveryTime: '',
        deliveryInstructions: '',
    });

    const [additionalNotes, setAdditionalNotes] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Layout >

            <Container>

                <Form onSubmit={handleFormSubmit}>
                    <Row>
                        <Col>
                            <h3>Sender Information</h3>
                            <Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group><Form.Group controlId="senderName">
                                <Form.Label>Name of the sender</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter sender's name"
                                    value={senderInfo.senderName}
                                    onChange={(e) =>
                                        setSenderInfo({ ...senderInfo, senderName: e.target.value })
                                    }
                                />
                            </Form.Group>
                            {/* Add other sender info fields here */}
                        </Col>
                        <Col>
                            <h3>Receiver Information</h3>
                            <Form.Group controlId="receiverName">
                                <Form.Label>Name of the receiver</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter receiver's name"
                                    value={receiverInfo.receiverName}
                                    onChange={(e) =>
                                        setReceiverInfo({ ...receiverInfo, receiverName: e.target.value })
                                    }
                                />
                            </Form.Group>
                            {/* Add other receiver info fields here */}
                        </Col>
                    </Row>
                    {/* Add shipment details fields here */}
                    {/* Add pickup and delivery preferences fields here */}
                    {/* Add additional notes/comments field here */}
                    <Button variant="primary" type="submit">
                        Book
                    </Button>
                </Form>
            </Container>


        </Layout >
    );
};

export default Book;
