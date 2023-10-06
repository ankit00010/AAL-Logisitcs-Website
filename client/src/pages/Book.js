import React, { useState } from 'react';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can access all the form data in the state variables
        // Do something with the data, such as sending it to an API or logging it
        console.log('Client Information:', clientInfo);
        console.log('Receiver Information:', receiverInfo);
        console.log('Shipment Details:', shipmentDetails);
        console.log('Pickup Information:', pickupInfo);
        console.log('Delivery Information:', deliveryInfo);
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Client Information */}
            <h3>Client Information</h3>
            <input
                type="text"
                placeholder="Name"
                value={clientInfo.name}
                onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Organization"
                value={clientInfo.organization}
                onChange={(e) => setClientInfo({ ...clientInfo, organization: e.target.value })}
            />
            <input
                type="text"
                placeholder="Contact Number"
                value={clientInfo.contactNumber}
                onChange={(e) => setClientInfo({ ...clientInfo, contactNumber: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={clientInfo.email}
                onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
            />

            {/* Receiver Information */}
            <h3>Receiver Information</h3>
            <input
                type="text"
                placeholder="Name"
                value={receiverInfo.name}
                onChange={(e) => setReceiverInfo({ ...receiverInfo, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Organization"
                value={receiverInfo.organization}
                onChange={(e) => setReceiverInfo({ ...receiverInfo, organization: e.target.value })}
            />
            <input
                type="text"
                placeholder="Contact Number"
                value={receiverInfo.contactNumber}
                onChange={(e) => setReceiverInfo({ ...receiverInfo, contactNumber: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={receiverInfo.email}
                onChange={(e) => setReceiverInfo({ ...receiverInfo, email: e.target.value })}
            />

            {/* Shipment Details */}
            <h3>Shipment Details</h3>
            <input
                type="text"
                placeholder="Vehicle Type"
                value={shipmentDetails.vehicleType}
                onChange={(e) => setShipmentDetails({ ...shipmentDetails, vehicleType: e.target.value })}
            />
            <input
                type="text"
                placeholder="Weight"
                value={shipmentDetails.weight}
                onChange={(e) => setShipmentDetails({ ...shipmentDetails, weight: e.target.value })}
            />
            <input
                type="text"
                placeholder="HSN Code"
                value={shipmentDetails.hsnCode}
                onChange={(e) => setShipmentDetails({ ...shipmentDetails, hsnCode: e.target.value })}
            />
            <input
                type="text"
                placeholder="Product Description"
                value={shipmentDetails.productDescription}
                onChange={(e) => setShipmentDetails({ ...shipmentDetails, productDescription: e.target.value })}
            />

            {/* Pickup Information */}
            <h3>Pickup Information</h3>
            <input
                type="date"
                placeholder="Pickup Date"
                value={pickupInfo.pickupDate}
                onChange={(e) => setPickupInfo({ ...pickupInfo, pickupDate: e.target.value })}
            />
            <input
                type="time"
                placeholder="Pickup Time"
                value={pickupInfo.pickupTime}
                onChange={(e) => setPickupInfo({ ...pickupInfo, pickupTime: e.target.value })}
            />
            <input
                type="text"
                placeholder="Pickup Address"
                value={pickupInfo.pickupAddress}
                onChange={(e) => setPickupInfo({ ...pickupInfo, pickupAddress: e.target.value })}
            />

            {/* Delivery Information */}
            <h3>Delivery Information</h3>
            <input
                type="date"
                placeholder="Delivery Date"
                value={deliveryInfo.deliveryDate}
                onChange={(e) => setDeliveryInfo({ ...deliveryInfo, deliveryDate: e.target.value })}
            />
            <input
                type="time"
                placeholder="Delivery Time"
                value={deliveryInfo.deliveryTime}
                onChange={(e) => setDeliveryInfo({ ...deliveryInfo, deliveryTime: e.target.value })}
            />
            <input
                type="text"
                placeholder="Delivery Address"
                value={deliveryInfo.deliveryAddress}
                onChange={(e) => setDeliveryInfo({ ...deliveryInfo, deliveryAddress: e.target.value })}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default BookingForm;
