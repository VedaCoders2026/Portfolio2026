// routes/projectRoutes.js
const express = require('express');
const multer = require('multer');
const projectController = require('../controllers/projectController');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post(
  '/projects',
  upload.fields([
    { name: 'hero_img', maxCount: 1 },
    { name: 'video', maxCount: 1 },
    { name: 'gallery', maxCount: 10 },
  ]),
  projectController.createProject
);
router.get('/projects', projectController.getProjects);
router.put(
  '/projects/:id',
  upload.fields([
    { name: 'hero_img', maxCount: 1 },
    { name: 'video', maxCount: 1 },
    { name: 'gallery', maxCount: 10 },
  ]),
  projectController.updateProject
);
router.get('/projects/:id', projectController.getProjectById);
router.delete('/projects/:id', projectController.deleteProject);

module.exports = router;