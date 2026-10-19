const express = require('express');
const router = express.Router();

const ctrlAuth = require('../controllers/auth');
const ctrlCountries = require('../controllers/countries');

router.route('/register').post(ctrlAuth.register);
router.route('/login').post(ctrlAuth.login);
router.route('/countries').get(ctrlCountries.countriesList);
router.route('/countries/:countryid').get(ctrlCountries.countriesReadOne);

module.exports = router;