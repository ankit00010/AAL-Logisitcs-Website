const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define user roles
const userRoles = ["visitor", "user", "admin"];

// Schema design
const userSchema = new mongoose.Schema(
    {
        salutation: {
            type: String,
            enum: ["Mr", "Miss", "Ms"],
            required: [true, "Salutation is required"],
        },
        fname: {
            type: String,
            required: [true, "First name is required"],
            minlength: [2, "First name should be at least 2 characters"],
            maxlength: [50, "First name cannot exceed 50 characters"],
        },
        lname: {
            type: String,
            required: [true, "Last name is required"],
            minlength: [2, "Last name should be at least 2 characters"],
            maxlength: [50, "Last name cannot exceed 50 characters"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
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
            match: [/^\d{10}$/, "Invalid contact number"], // Validate a 10-digit contact number
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password should be at least 6 characters"],
        },
        cpassword: {
            type: String,
            required: [true, "Confirm password is required"],
            validate: {
                validator: function (v) {
                    return v === this.password;
                },
                message: "Passwords do not match",
            },
        },
        organization: {
            type: String,
            maxlength: [100, "Organization name cannot exceed 100 characters"],
        },
        country: {
            type: String,
            default: "India",
        },
        role: {
            type: String,
            enum: userRoles,
            default: "visitor",
        },
    },
    { timestamps: true }
);

// Hash the password before saving
userSchema.pre("save", async function (next) {
    try {
        if (!this.isModified("password")) {
            return next();
        }

        // Generate a salt
        const salt = await bcrypt.genSalt(10);

        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(this.password, salt);

        // Replace the plain password with the hashed one
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

// Model
const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
