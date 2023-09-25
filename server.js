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

//middlewares
app.use(cors());

app.use(morgan("dev"));

app.use(cors());

//routes

app.get("/", (req, res) => {
  res.send("<h1>Hello from server</h1>");
});

const PORT = 8080 || process.env.PORT;

//listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
