require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const authRoute = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

//CORS Policy Handling
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Mount Router
app.use("/api/auth", authRoute);

app.use(errorMiddleware);

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