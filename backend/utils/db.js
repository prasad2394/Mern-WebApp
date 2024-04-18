const mongoose = require("mongoose");

//const URI = "mongodb://127.0.0.1:27017/webapp_admin";
//mongoose.connect(URI);
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
         await mongoose.connect(URI);
         console.log("Connection Successful to database");
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;