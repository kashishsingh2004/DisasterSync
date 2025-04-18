const Request = require('../models/Request');

const getAllRequests = async (req, res) => {
    try {
        const requests = await Request.find();
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch requests', error });
    }
};

const createRequest = async (req, res) => {
    try {
        const newRequest = new Request(req.body);
        await newRequest.save();
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create request', error });
    }
};

module.exports = { getAllRequests, createRequest };
