const debug = require('debug')('app:feed.controller');
const axios = require('axios');
const {validationResult} = require('express-validator');

const {neoClient} = require('../client')

const getNeoTodayFeed = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()});

        const {API_KEY} = process.env

        const {data, status} = await neoClient.get(`/feed/today?detailed=true&api_key=${API_KEY}`);

        res.status(200).json(data);
    } catch (err) {
        debug('%O', err);
        res.status(err.statusCode || 500).json({errors: err.message.toString() || "Internal server error"});
    }
};

const getNeoFeed = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({errors: errors.array()});

        const {API_KEY} = process.env
        const {startDate, endDate} = req.query;

        const {data} = await neoClient.get(`/feed?start_date=${startDate}&end_date=${endDate}&detailed=true&api_key=${API_KEY}`);

        let feed = [];
        Object
            .keys(data.near_earth_objects)
            .map(key => feed.push(...data.near_earth_objects[key].map(v => normalizeFeed(v))))

        res.status(200).json(feed);
    } catch (err) {
        console.log('%O', err);
        res.status(err.statusCode || 500).json({errors: err.message.toString() || "Internal server error"});
    }
};

const normalizeFeed = feed => {
    const [closeApproachData] = feed.close_approach_data;

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
        closeApproachDate: closeApproachData.close_approach_date,
        closeApproachDateTime: closeApproachData.close_approach_date_full,
        velocity: {
            metric: closeApproachData.relative_velocity.kilometers_per_hour,
            imperial: closeApproachData.relative_velocity.miles_per_hour
        },
        distance: {
            comparison: getAsteroidSizeImage(closeApproachData.miss_distance.lunar,
                feed.estimated_diameter.meters.estimated_diameter_min),
            lunar: closeApproachData.miss_distance.lunar,
            astronomical: closeApproachData.miss_distance.astronomical,
            metric: closeApproachData.miss_distance.kilometers,
            imperial: closeApproachData.miss_distance.miles
        },
        orbitingBody: closeApproachData.orbiting_body,
        orbitalData: feed.orbital_data
    }
};

const getAsteroidSizeImage = (lunarDistance, asteroidSize) => {
    let image = '';
    if (asteroidSize <= 5) {
        image = 'Car';
    } else if (asteroidSize > 5 && asteroidSize <= 15) {
        image = 'Bus';
    } else if (asteroidSize > 15 && asteroidSize <= 30) {
        image = 'Semi';
    } else if (asteroidSize > 30 && asteroidSize <= 100) {
        image = 'Shuttle';
    } else if (asteroidSize > 100 && asteroidSize <= 300) {
        image = 'Arena';
    } else if (asteroidSize > 300 && asteroidSize <= 600) {
        image = 'Scraper';
    } else if (asteroidSize > 600 && asteroidSize <= 1000) {
        image = 'Arenas';
    } else if (asteroidSize > 1000) {
        image = 'Mountain';
    }

    let color = '';
    if (lunarDistance <= 3) {
        color = 'Red';
    } else if (lunarDistance > 3 && lunarDistance <= 5) {
        color = 'DarkOrange';
    } else if (lunarDistance > 5 && lunarDistance <= 7) {
        color = 'Orange';
    } else if (lunarDistance > 7 && lunarDistance <= 10) {
        color = 'LightOrange';
    } else if (lunarDistance > 10 && lunarDistance <= 30) {
        color = 'Yellow';
    } else if (lunarDistance > 30 && lunarDistance <= 50) {
        color = 'LightYellow';
    } else if (lunarDistance > 50) {
        color = 'White';
    }

    return {color, image}
}

module.exports = {
    getNeoTodayFeed,
    getNeoFeed
};
