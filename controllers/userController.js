const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

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
                    "your-secret-key", // Replace with your secret key
                    { expiresIn: '1d' }
                );

                // Set the token in a cookie
                res.cookie('token', token, { httpOnly: true });

                // Respond with a success message or user data
                return res.status(200).json({
                    success: true,
                    role: user.role,
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
        console.log('Received registration request:', req.body);

        const newUser = new userModel(req.body);
        await newUser.save();

        res.status(200).json({
            success: true,
            newUser
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
};

module.exports = { loginController, registerController };