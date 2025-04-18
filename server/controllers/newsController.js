const News = require('../models/News');

const getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch news', error });
    }
};

const createNews = async (req, res) => {
    try {
        const newNews = new News(req.body);
        await newNews.save();
        res.status(201).json(newNews);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create news', error });
    }
};

module.exports = { getAllNews, createNews };
