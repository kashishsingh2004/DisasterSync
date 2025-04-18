const express = require('express');
const { getAllRequests, createRequest } = require('../controllers/requestController');

const router = express.Router();

router.get('/', getAllRequests); // Get all requests
router.post('/', createRequest); // Create new request

module.exports = router;
