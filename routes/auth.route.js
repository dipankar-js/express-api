const express = require('express');
const router = express.Router();
const {loginUser, signupUser} = require('../controllers/auth.controller');
const { body } = require('express-validator');

// POST --- LOGIN
// URL --> http://localhost:3000/api/auth/login
router.post('/login', loginUser);

// POST --- SIGNUP
// URL --> http://localhost:3000/api/auth/signup
router.post('/signup',
    body('email').isEmail().withMessage('Please add a valid email address'),
    body('password').isLength({ min: 5, max: 12 }).withMessage('Password should be of length between 5 to 12 characters'),
    signupUser
);

module.exports = router;