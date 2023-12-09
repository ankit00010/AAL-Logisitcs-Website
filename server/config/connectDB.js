const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {

        const connect = await mongoose.connect(process.env.MON_CONNECTION);
        console.log(`Server is running on ${mongoose.connection.host}`.bgCyan.white);


    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;