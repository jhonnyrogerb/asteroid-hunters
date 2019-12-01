const express = require('express');

const feedCtrl = require('../controllers/feed.controller')
const feedVldt = require('../middlewares/feed-validator.middleware')

const router = express.Router();

router.route('/')
    .get(feedVldt.getNeoFeedValidator, feedCtrl.getNeoFeed);

router.route('/today')
    .get(feedCtrl.getNeoTodayFeed);

module.exports = router;
