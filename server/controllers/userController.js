const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require('dotenv').config();
const app = express();


// Use cookie-parser middleware to handle cookies
app.use(cookieParser());

// ...

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not found',
            });
        }
        // Compare the provided password with the stored hashed password
        bcrypt.compare(password, user.password, (err, passwordMatch) => {
            if (passwordMatch) {
                // Create a JWT with user data
                const token = jwt.sign({ email: user.email, role: user.role },
                    "your-secret-key", // Replace 
                    { expiresIn: '1d' }
                );

                // Set the token in a cookie
                res.cookie('token', token, { httpOnly: true });

                // Respond with a success message or user data
                return res.status(200).json({
                    success: true,
                    role: user.role,
                    uname: user.fname,
                    message: 'Login successful',
                });
            } else {
                return res.status(401).json({
                    success: false,
                    message: 'Incorrect password',
                });
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        });
    }
};



//Register call back

const registerController = async (req, res) => {
    try {
        const newUser = new userModel(req.body);

        // Validate the user data
        await newUser.validate();

        // If validation passes, save the user
        await newUser.save({ writeConcern: { w: 'majority', wtimeout: 0 } });

        res.status(200).json({
            success: true,
            newUser
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            // Handle validation errors
            const validationErrors = {};
            for (const field in error.errors) {
                validationErrors[field] = error.errors[field].message;
            }
            res.status(400).json({
                success: false,
                validationErrors,
                message: 'Validation error. Please check the form for errors.',
            });
        } else {
            // Handle other types of errors
            res.status(400).json({
                success: false,
                error: error.message,
                message: 'Registration failed. Please try again later.',
            });
        }
    }
};



const bookingController = async (req, res) => {
    try {
        const formData = req.body;
        const email = process.env.EMAIL_ID;
        const pass = process.env.EMAIL_PASS;


        const transporter = nodemailer.createTransport({
            service: 'gmail',

            auth: {
                user: email,
                pass: pass,
            },
        });

        // Define email data
        const mailOptions = {
            from: 'pacificlame@gmail.com',
            to: 'ankitmish83@gmail.com',
            subject: 'Booking Form Submission',
            text: `
Online Booking Information:

Client Info:
- Name: ${formData.clientInfo.name}
- Organization: ${formData.clientInfo.organization}
- Contact Number: ${formData.clientInfo.contactNumber}
- Email: ${formData.clientInfo.email}

Receiver Info:
- Name: ${formData.receiverInfo.name}
- Organization: ${formData.receiverInfo.organization}
- Contact Number: ${formData.receiverInfo.contactNumber}
- Email: ${formData.receiverInfo.email}

Shipment Details:
- Vehicle Type: ${formData.shipmentDetails.vehicleType}
- Weight: ${formData.shipmentDetails.weight}
- HSN Code: ${formData.shipmentDetails.hsnCode}
- Product Description: ${formData.shipmentDetails.productDescription}

Pickup Info:
- Pickup Date: ${formData.pickupInfo.pickupDate}
- Pickup Time: ${formData.pickupInfo.pickupTime}
- Pickup Address: ${formData.pickupInfo.pickupAddress}

Delivery Info:
- Delivery Date: ${formData.deliveryInfo.deliveryDate}
- Delivery Time: ${formData.deliveryInfo.deliveryTime}
- Delivery Address: ${formData.deliveryInfo.deliveryAddress}
`

        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'An error occurred while sending the email' });
    }
};


module.exports = { loginController, registerController, bookingController };