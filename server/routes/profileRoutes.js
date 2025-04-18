const express = require('express');
const { getAllProfiles, createProfile } = require('../controllers/profileController');

const router = express.Router();

router.get('/', getAllProfiles); // Get all profiles
router.post('/', createProfile); // Create new profile

module.exports = router;
