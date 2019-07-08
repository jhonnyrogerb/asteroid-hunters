import axios from 'axios';

const { location } = document;
const baseURL = `${location.protocol}//${location.hostname}:${location.port}${location.pathname}`;

const client = axios.create({
    responseType: 'json',
    baseURL,
});

export default client;
