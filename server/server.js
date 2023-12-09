const express = require("express");
const cors = require("cors"); // Import the cors middleware
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const cookieParser = require('cookie-parser');

// config dot env file
dotenv.config();

// database call
connectDB();

// rest object
const app = express();
app.use(express.json());

// middlewares
app.use(cors({
  origin: 'https://user-management-vznb.vercel.app',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(cookieParser());
app.use(morgan("dev"));

// routes
const userRoutes = require('./routes/userRoutes');
app.use("/api/v1/users", userRoutes);

console.log('here server');
const PORT = 8080 || process.env.PORT;

// listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
