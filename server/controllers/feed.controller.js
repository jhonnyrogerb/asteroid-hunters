const debug = require('debug')('app:feed.controller');
const { validationResult } = require('express-validator');

const { neoClient } = require('../client')

const getNeoTodayFeed = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

        const { API_KEY } = process.env

        const { data, status } = await neoClient.get(`/feed/today?detailed=true&api_key=${API_KEY}`);

        res.status(200).json(data);
    } catch (err) {
        debug('%O', err);
        res.status(err.statusCode || 500).json({ errors: err.message.toString() || "Internal server error" });
    }
};

const getNeoFeed = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

        const { API_KEY } = process.env
        const { startDate, endDate } = req.query;

        const { data, status } = await neoClient.get(`/feed?start_date=${startDate}&end_date=${endDate}&detailed=true&api_key=${API_KEY}`);

        let feed = [];
        Object
            .keys(data.near_earth_objects)
            .map(key => feed = [...feed, ...data.near_earth_objects[key]])

        res.status(200).json(feed);
    } catch (err) {
        debug('%O', err);
        res.status(err.statusCode || 500).json({ errors: err.message.toString() || "Internal server error" });
    }
};

module.exports = {
    getNeoTodayFeed,
    getNeoFeed
}
