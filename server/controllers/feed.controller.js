const debug = require('debug')('app:feed.controller');
const { validationResult } = require('express-validator');

const { neoClient } = require('../client')

const getNeoTodayFeed = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

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
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const { API_KEY } = process.env
        const { startDate, endDate } = req.query;

        const { data, status } = await neoClient.get(`/feed?start_date=${startDate}&end_date=${endDate}&detailed=true&api_key=${API_KEY}`);

        let feed = [];
        Object
            .keys(data.near_earth_objects)
            .map(key => feed = [...feed, ...data.near_earth_objects[key].map(v => normalizeFeed(v))])

        res.status(200).json(feed);
    } catch (err) {
        debug('%O', err);
        res.status(err.statusCode || 500).json({ errors: err.message.toString() || "Internal server error" });
    }
};

const normalizeFeed = feed => {
    return {
        id: feed.id,
        reference: feed.neo_reference_id,
        name: feed.name,
        nasaUrl: feed.nasa_jpl_url,
        absoluteMagnitude: feed.absolute_magnitude_h,
        diameter: {
            metric: {
                min: feed.estimated_diameter.meters.estimated_diameter_min,
                max: feed.estimated_diameter.meters.estimated_diameter_max
            },
            imperial: {
                min: feed.estimated_diameter.feet.estimated_diameter_min,
                max: feed.estimated_diameter.feet.estimated_diameter_max
            }
        },
        isHazardous: feed.is_potentially_hazardous_asteroid,
        closeApproachDate: feed.close_approach_data[0].close_approach_date,
        closeApproachDateTime: feed.close_approach_data[0].close_approach_date_full,
        velocity: {
            metric: feed.close_approach_data[0].relative_velocity.kilometers_per_hour,
            imperial: feed.close_approach_data[0].relative_velocity.miles_per_hour
        },
        distance: {
            lunar: feed.close_approach_data[0].miss_distance.lunar,
            astronomical: feed.close_approach_data[0].miss_distance.astronomical,
            metric: feed.close_approach_data[0].miss_distance.kilometers,
            imperial: feed.close_approach_data[0].miss_distance.miles
        },
        orbitingBody: feed.close_approach_data[0].orbiting_body

    }
}

module.exports = {
    getNeoTodayFeed,
    getNeoFeed
}
