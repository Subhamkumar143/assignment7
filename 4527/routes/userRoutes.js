const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User API routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', userController.profile);

module.exports = router;
