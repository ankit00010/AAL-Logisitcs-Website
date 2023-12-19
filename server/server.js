const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const cookieParser = require('cookie-parser');
const rateLimit = require("express-rate-limit");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
  origin: function (origin, callback) {
    // Check if the request origin is allowed
    const allowedOrigins = ['https://aalogistic.vercel.app'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['POST'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(cookieParser());
app.use(morgan("dev"));

// Add rate limiter middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // limit each IP to 3 requests per windowMs
});

app.use(limiter);

const userRoutes = require('./routes/userRoutes');
app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
