const express = require('express');

const feedCtrl = require('../controllers/feed.controller')

const router = express.Router();

router.route('/')
  .get(feedCtrl.getNeoFeed);

router.route('/today')
  .get(feedCtrl.getNeoTodayFeed);

module.exports = router;
