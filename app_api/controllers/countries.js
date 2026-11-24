const mongoose = require('mongoose');
const Country = mongoose.model('Country');

const countriesList = function (req, res) {
  Country
    .find()
    .then(countries => {
      res
        .status(200)
        .json(countries);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: 'Error retrieving countries' });
    });
};

const countriesReadOne = function (req, res) {
  if (!mongoose.isValidObjectId(req.params.countryid)) {
    return res
      .status(400)
      .json({ message: 'Invalid countryid' });
  }

  Country
    .findById(req.params.countryid)
    .then(country => {
      if (!country) {
        return res
          .status(404)
          .json({ message: 'countryid not found' });
      }
      res
        .status(200)
        .json(country);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: 'Error retrieving country' });
    });
};
// POST method for creating a new country
const countriesCreate = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: 'name is required' });
  }
  Country.create({ name: req.body.name, cities: [] })
    .then(country => res.status(201).json(country))
    .catch(err => {
      if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Validation failed' });
      }
      res.status(500).json({ message: 'Error creating country' });
    });
};

module.exports = {
  countriesList,
  countriesReadOne,
  countriesCreate
};