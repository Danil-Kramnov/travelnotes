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

module.exports = {
  countriesList,
};