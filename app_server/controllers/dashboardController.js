// taken from: https://axios-http.com/docs/example
const axios = require('axios');

const apiUrl = process.env.API_URL || 'http://localhost:' + (process.env.PORT || 3000);

const index = (req, res) => {
  axios
    .get(apiUrl + '/api/countries')
    .then(response => {
      res.render('dashboard', {
        title: 'Dashboard',
        countries: response.data
      });
    })
    .catch(err => {
      console.log('API call failed:', err.message);
      res.render('dashboard', {
        title: 'Dashboard',
        countries: [],
        error: 'Could not load countries'
      });
    });
};

module.exports = { index };