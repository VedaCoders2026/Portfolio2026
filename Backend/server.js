// server.js
require('dotenv').config();
const express = require('express');
const cloudinary = require('cloudinary').v2;
const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors');
const sql = require('mssql');
const sqlConfig = require('./config/db');

const app = express();
app.set('trust proxy', 1);
const port = process.env.PORT || 3000;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Initialize MSSQL connection pool
let pool;
async function initDatabasePool() {
  try {
    pool = await sql.connect(sqlConfig);
    console.log('✅ Connected to MSSQL database');
  } catch (err) {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
  }
}
initDatabasePool();

// Expose the pool to routes
app.use((req, _res, next) => {
  req.dbPool = pool;
  next();
});

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: process.env.REACT_APP_API_BASE_URL, // e.g. http://localhost:3000
    credentials: true,
  })
);

// Routes
app.use('/api', contactRoutes);
app.use('/api', projectRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});