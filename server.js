const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/connectDB");




//config dot env file
dotenv.config();

//datbase call
connectDB();
//rest object
const app = express();
app.use(express.json());

//middlewares
app.use(cors());

app.use(morgan("dev"));


//routes

app.use("/api/v1/users", require('./routes/userRoutes'));
console.log('here server')
const PORT = 8080 || process.env.PORT;

//listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
