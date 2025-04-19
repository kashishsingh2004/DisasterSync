const express = require('express');
const { getAllRequests, createRequest,getPendingRequests } = require('../controllers/requestController');

const router = express.Router();

router.get('/', getAllRequests); // Get all requests
router.get('/', getAllRequests); // Get all requests
router.post('/pending',getPendingRequests); // Create new request

module.exports = router;
