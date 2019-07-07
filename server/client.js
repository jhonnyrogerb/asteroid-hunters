const axios = require('axios');

exports.neoClient = axios.create({
    responseType: 'json',
    baseURL: 'https://api.nasa.gov/neo/rest/v1'
});
