const Profile = require('../models/Profile');

const getAllProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch profiles', error });
    }
};

const createProfile = async (req, res) => {
    try {
        const newProfile = new Profile(req.body);
        await newProfile.save();
        res.status(201).json(newProfile);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create profile', error });
    }
};

module.exports = { getAllProfiles, createProfile };
