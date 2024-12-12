const express = require('express');
const { registerUser, loginUser, getUserDetails } = require('../controllers/authController'); // Ensure getUserDetails is imported
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

const router = express.Router();

// User Registration
router.post('/register', registerUser);

// User Login
router.post('/login', loginUser);

// Protected route for admin only
router.get('/admin', protect, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Welcome to the admin panel' });
});

// Protected route for user details
router.get('/user', protect, getUserDetails); // Use getUserDetails controller function 

module.exports = router;
