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
        },
        fname: {
            type: String,
            required: [true, "First name is required"],
        },
        lname: {
            type: String,
            required: [true, "Last name is required"],
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
        },
        password: {
            type: String,
            required: [true, "Password is required"],
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
