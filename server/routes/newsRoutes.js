const express = require('express');
const { getAllNews, createNews } = require('../controllers/newsController');

const router = express.Router();

router.get('/', getAllNews); // Get all news
router.post('/', createNews); // Create new news

module.exports = router;
