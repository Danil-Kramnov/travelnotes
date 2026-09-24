const index = function (req, res) { 
    res.render('register', { title: 'Register' }); 
}; 
module.exports = { index, };