const express = require('express');

const router = express.Router();

const home = require('../controllers/HomeController');

// Home page route.
router.get('/', home.home);

module.exports = router;
