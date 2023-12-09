import React, { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import '../CSS/BookingForm.css';
import '../CSS/Commonback.css';

const BookingForm = () => {
    const [clientInfo, setClientInfo] = useState({
        name: '',
        organization: '',
        contactNumber: '',
        email: '',
    });

    const [receiverInfo, setReceiverInfo] = useState({
        name: '',
        organization: '',
        contactNumber: '',
        email: '',
    });

    const [shipmentDetails, setShipmentDetails] = useState({
        vehicleType: '',
        weight: '',
        hsnCode: '',
        productDescription: '',
    });

    const [pickupInfo, setPickupInfo] = useState({
        pickupDate: '',
        pickupTime: '',
        pickupAddress: '',
    });

    const [deliveryInfo, setDeliveryInfo] = useState({
        deliveryDate: '',
        deliveryTime: '',
        deliveryAddress: '',
    });

    const [fieldErrors, setFieldErrors] = useState({
        // Client Information
        clientName: '',
        clientOrganization: '',
        clientContactNumber: '',
        clientEmail: '',

        // Receiver Information
        receiverName: '',
        receiverOrganization: '',
        receiverContactNumber: '',
        receiverEmail: '',

        // Shipment Details
        shipmentVehicleType: '',
        shipmentWeight: '',
        shipmentHsnCode: '',
        shipmentProductDescription: '',

        // Pickup Information
        pickupDate: '',
        pickupTime: '',
        pickupAddress: '',

        // Delivery Information
        deliveryDate: '',
        deliveryTime: '',
        deliveryAddress: '',
    });

    const validatePhone = (phoneNumber) => {
        const phonePattern = /^\d{10}$/;
        return phonePattern.test(phoneNumber);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {};

        // Client Information
        if (!/^\S+@\S+\.\S+$/.test(clientInfo.email)) {
            errors.clientEmail = 'Client Email is invalid';
            message.error('Client Email is invalid');
        }

        if (!validatePhone(clientInfo.contactNumber)) {
            errors.clientContactNumber = 'Client Contact Number is invalid';
            message.error('Client Contact Number is invalid');
        }

        // Receiver Information
        if (!/^\S+@\S+\.\S+$/.test(receiverInfo.email)) {
            errors.receiverEmail = 'Receiver Email is invalid';
            message.error('Receiver Email is invalid');
        }

        if (!validatePhone(receiverInfo.contactNumber)) {
            errors.receiverContactNumber = 'Receiver Contact Number is invalid';
            message.error('Receiver Contact Number is invalid');
        }

        // Shipment Details
        if (!shipmentDetails.vehicleType.trim()) {
            errors.shipmentVehicleType = 'Vehicle Type is required';
            message.error('Vehicle Type is required');
        }

        if (!shipmentDetails.weight.trim()) {
            errors.shipmentWeight = 'Weight is required';
            message.error('Weight is required');
        }

        if (!shipmentDetails.hsnCode.trim()) {
            errors.shipmentHsnCode = 'HSN Code is required';
            message.error('HSN Code is required');
        }

        if (!shipmentDetails.productDescription.trim()) {
            errors.shipmentProductDescription = 'Product Description is required';
            message.error('Product Description is required');
        }

        // Pickup Information
        if (!pickupInfo.pickupDate.trim()) {
            errors.pickupDate = 'Pickup Date is required';
            message.error('Pickup Date is required');
        }

        if (!pickupInfo.pickupTime.trim()) {
            errors.pickupTime = 'Pickup Time is required';
            message.error('Pickup Time is required');
        }

        if (!pickupInfo.pickupAddress.trim()) {
            errors.pickupAddress = 'Pickup Address is required';
            message.error('Pickup Address is required');
        }

        // Delivery Information
        if (!deliveryInfo.deliveryDate.trim()) {
            errors.deliveryDate = 'Delivery Date is required';
            message.error('Delivery Date is required');
        }

        if (!deliveryInfo.deliveryTime.trim()) {
            errors.deliveryTime = 'Delivery Time is required';
            message.error('Delivery Time is required');
        }

        if (!deliveryInfo.deliveryAddress.trim()) {
            errors.deliveryAddress = 'Delivery Address is required';
            message.error('Delivery Address is required');
        }


        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        const formData = {
            clientInfo,
            receiverInfo,
            shipmentDetails,
            pickupInfo,
            deliveryInfo,
        };

        try {
            const response = await axios.post('/users/book-form', formData);

            if (response.status === 200) {
                message.success('Your form is submitted successfully. You will be contacted soon');
                setClientInfo({ name: '', organization: '', contactNumber: '', email: '' });
                setReceiverInfo({ name: '', organization: '', contactNumber: '', email: '' });
                setShipmentDetails({ vehicleType: '', weight: '', hsnCode: '', productDescription: '' });
                setPickupInfo({ pickupDate: '', pickupTime: '', pickupAddress: '' });
                setDeliveryInfo({ deliveryDate: '', deliveryTime: '', deliveryAddress: '' });
                setFieldErrors({});
            }
        } catch (error) {
            message.error('An error occurred while submitting the form. Please try again later.');
        }
    };

    const renderError = (fieldName) => {
        return fieldErrors[fieldName] && (
            <div className="error-message">{fieldErrors[fieldName]}</div>
        );
    };

    return (
        <div className="about-us-container">
            <div className="transparent-backgrounds"></div>
            <div className="about-us-background">
                <div className="about-us-content">
                    <h1>Book now</h1>
                    <form onSubmit={handleSubmit} className="custom-form">
                        {/* Client Information */}
                        <h3>Client Information</h3>
                        {renderError('clientName')}

                        <input
                            type="text"
                            placeholder="Name"
                            required
                            className='custom-input'
                            value={clientInfo.name}
                            onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                        />
                        {renderError('clientOrganization')}

                        <input
                            type="text"
                            placeholder="Organization"
                            className='custom-input'
                            value={clientInfo.organization}
                            required
                            onChange={(e) => setClientInfo({ ...clientInfo, organization: e.target.value })}
                        />
                        {renderError('clientContactNumber')}

                        <input
                            type="text"
                            placeholder="Contact Number"
                            className='custom-input'
                            value={clientInfo.contactNumber}
                            required
                            onChange={(e) => setClientInfo({ ...clientInfo, contactNumber: e.target.value })}
                        />
                        {renderError('clientEmail')}

                        <input
                            type="email"
                            placeholder="Email"
                            value={clientInfo.email}
                            className='custom-input'
                            required
                            onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                        />

                        {/* Receiver Information */}
                        {renderError('receiverName')}

                        <h3>Receiver Information</h3>
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            className='custom-input'
                            value={receiverInfo.name}
                            onChange={(e) => setReceiverInfo({ ...receiverInfo, name: e.target.value })}
                        />
                        {renderError('receiverOrganization')}

                        <input
                            type="text"
                            placeholder="Organization"
                            className='custom-input'
                            value={receiverInfo.organization}
                            required
                            onChange={(e) => setReceiverInfo({ ...receiverInfo, organization: e.target.value })}
                        />
                        {renderError('receiverContactNumber')}

                        <input
                            type="text"
                            placeholder="Contact Number"
                            className='custom-input'
                            value={receiverInfo.contactNumber}
                            required
                            onChange={(e) => setReceiverInfo({ ...receiverInfo, contactNumber: e.target.value })}
                        />
                        {renderError('receiverEmail')}

                        <input
                            type="email"
                            placeholder="Email"
                            value={receiverInfo.email}
                            className='custom-input'
                            required
                            onChange={(e) => setReceiverInfo({ ...receiverInfo, email: e.target.value })}
                        />
                        {renderError('shipmentVehicleType')}

                        <h3>Shipment Details</h3>
                        <input
                            type="text"
                            placeholder="Vehicle Type"
                            required
                            className='custom-input'
                            value={shipmentDetails.vehicleType}
                            onChange={(e) => setShipmentDetails({ ...shipmentDetails, vehicleType: e.target.value })}
                        />
                        {renderError('shipmentWeight')}

                        <input
                            type="text"
                            placeholder="Weight"
                            required
                            className='custom-input'
                            value={shipmentDetails.weight}
                            onChange={(e) => setShipmentDetails({ ...shipmentDetails, weight: e.target.value })}
                        />
                        {renderError('shipmentHsnCode')}

                        <input
                            type="text"
                            placeholder="HSN Code"
                            required
                            className='custom-input'
                            value={shipmentDetails.hsnCode}
                            onChange={(e) => setShipmentDetails({ ...shipmentDetails, hsnCode: e.target.value })}
                        />
                        {renderError('shipmentProductDescription')}

                        <textarea
                            placeholder="Product Description"
                            required
                            value={shipmentDetails.productDescription}
                            className='custom-input'
                            onChange={(e) => setShipmentDetails({ ...shipmentDetails, productDescription: e.target.value })}
                            rows={4}
                            style={{ width: '100%' }}
                        ></textarea>

                        {/* Pickup Information */}
                        {renderError('pickupDate')}
                        <h3>Pickup Information</h3>
                        <input
                            type="date"
                            placeholder="Pickup Date"
                            required
                            className='custom-input'
                            value={pickupInfo.pickupDate}
                            onChange={(e) => setPickupInfo({ ...pickupInfo, pickupDate: e.target.value })}
                        />
                        {renderError('pickupTime')}

                        <input
                            type="time"
                            placeholder="Pickup Time"
                            required
                            className='custom-input'
                            value={pickupInfo.pickupTime}
                            onChange={(e) => setPickupInfo({ ...pickupInfo, pickupTime: e.target.value })}
                        />
                        {renderError('pickupAddress')}

                        <textarea
                            placeholder="Pickup Address"
                            required
                            value={pickupInfo.pickupAddress}
                            className='custom-input'
                            onChange={(e) => setPickupInfo({ ...pickupInfo, pickupAddress: e.target.value })}
                            rows={4}
                            style={{ width: '100%' }}
                        ></textarea>

                        {/* Delivery Information */}
                        {renderError('deliveryDate')}

                        <h3>Delivery Information</h3>
                        <input
                            type="date"
                            placeholder="Delivery Date"
                            required
                            className='custom-input'
                            value={deliveryInfo.deliveryDate}
                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, deliveryDate: e.target.value })}
                        />
                        {renderError('deliveryTime')}

                        <input
                            type="time"
                            placeholder="Delivery Time"
                            required
                            className='custom-input'
                            value={deliveryInfo.deliveryTime}
                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, deliveryTime: e.target.value })}
                        />
                        {renderError('deliveryAddress')}

                        <textarea
                            placeholder="Delivery Address"
                            required
                            value={deliveryInfo.deliveryAddress}
                            className='custom-input'
                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, deliveryAddress: e.target.value })}
                            rows={4}
                            style={{ width: '100%' }}
                        ></textarea>


                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;

