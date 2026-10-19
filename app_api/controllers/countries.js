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

module.exports = {
  countriesList,
  countriesReadOne,
};