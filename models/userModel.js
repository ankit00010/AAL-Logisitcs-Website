const mongoose = require("mongoose");

// Schema design
const userSchema = new mongoose.Schema(
    {
        salutation: {
            type: String,
            enum: ["Mr", "Miss", "Ms"],
            required: [true, 'Salutation is required'],
        },
        fname: {
            type: String,
            required: [true, 'First name is required'],
        },
        lname: {
            type: String,
            required: [true, 'Last name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            trim: true,
            lowercase: true,
            validate: {
                validator: function (v) {
                    // Simple email validation regex
                    return /\S+@\S+\.\S+/.test(v);
                },
                message: "Invalid email address",
            },
        },
        contact: {
            type: String,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        cpassword: {
            type: String,
            required: [true, 'Confirm password is required'],
            validate: {
                validator: function (v) {
                    // You can add your custom password matching logic here
                    // For example, you can compare it with the 'password' field
                    return v === this.password;
                },
                message: "Passwords do not match",
            },
        },
        organization: {
            type: String,
        },
        country: {
            type: String,
            default: "India",
        },
    },
    { timestamps: true }
);

// Model
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
