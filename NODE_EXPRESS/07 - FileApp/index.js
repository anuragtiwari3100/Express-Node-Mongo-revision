const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

const fileUpload = require("express-fileupload");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '../tmp/'
}));

// DB connection
const { dbconnect } = require('./config/database');
dbconnect();

// Cloudinary config
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// Mount routes
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);

// Default route
app.get("/", (req, res) => {
    res.send(`<h1>Hi jee , welcome to my application</h1>`);
});

// Start server
app.listen(PORT, () => {
    console.log(`Application is running on the port ${PORT}`);
});
