require('dotenv').config();
const express = require('express');
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

// Middleware
app.use(express.json());

// Mount Router
app.use("/api/auth", router);


// app.get("/", (req, res) => {
//     res.status(200).send("App is Working...")
// });


// app.get("/register", (req, res) => {
//     res.status(200).send("Welcome to registration page")
// });
const PORT = 5000;
connectDb().then(() =>{
    app.listen(PORT, () => {
        console.log(`Server is Running on PORT: ${PORT}`);
    });
});