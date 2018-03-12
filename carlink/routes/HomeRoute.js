const express = require('express');

const router = express.Router();

const home = require('../controllers/HomeController');

// Home page route.
router.get('/', home.home)
	  .get('/register', home.register_user)
	  .get('/login', home.login)
	  .get('/offer-seats', home.offer_seats);

module.exports = router;
