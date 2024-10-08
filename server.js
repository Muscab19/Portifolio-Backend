const express = require('express');
const mongoose = require('mongoose');
const messageRoutes = require('./Routes/MassageRoutes'); // Adjust the path as needed
const cors = require('cors');

const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect("mongodb+srv://muscabmaxamuud356:6JOcFRTUnvFfyd8S@cluster0.v2z8p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Database has been connected successfully");
    })
    .catch((error) => {
        console.log(error);
    });

// Routes
app.use('/api/send', messageRoutes);

// Start the server
app.listen(1000, () => {
    console.log("Server is running successfully on port 1000");
});
