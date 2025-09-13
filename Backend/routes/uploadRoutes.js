// routes/uploadRoutes.js
const express = require('express');
const multer = require('multer');
const uploadController = require('../controllers/uploadController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload/image', upload.single('file'), uploadController.uploadImage);
router.post('/upload/video', upload.single('file'), uploadController.uploadVideo);

module.exports = router;