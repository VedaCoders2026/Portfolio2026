// routes/projectRoutes.js
const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

router.get('/projects', projectController.getProjects);
router.get('/projects/:id', projectController.getProjectById);

module.exports = router;