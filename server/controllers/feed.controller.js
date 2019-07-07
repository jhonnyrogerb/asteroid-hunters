const debug = require('debug')('app:feed.controller');

const { neoClient } = require('../client')

const getNeoTodayFeed = async (req, res) => {
    try {
        const { API_KEY } = process.env

        const { data, status } = await neoClient.get(`/feed/today?detailed=true&api_key=${API_KEY}`, { json: true });

        res.status(200).json(data);
    } catch (err) {
        debug('%O', err);
        res.status(err.statusCode || 500).json({ "error": err.message.toString() || "Internal server error" });
    }
};

const getNeoFeed = async (req, res) => {
    try {
        const { API_KEY } = process.env
        const { startDate, endDate } = req.query;

        const response = await neoClient.get(`/feed?start_date=${startDate}&end_date=${endDate}&detailed=true&api_key=${API_KEY}`, { json: true });

        res.status(200).json(response);
    } catch (err) {
        debug('%O', err);
        res.status(err.statusCode || 500).json({ "error": err.message.toString() || "Internal server error" });
    }
};

module.exports = {
    getNeoTodayFeed,
    getNeoFeed
}
