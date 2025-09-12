require('dotenv').config();
const express = require('express');
const cloudinary = require('cloudinary').v2;
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware
app.use(express.json());

// Routes
app.use('/api', uploadRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});