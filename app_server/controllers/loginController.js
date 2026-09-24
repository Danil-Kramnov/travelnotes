const index = function (req, res) { 
    res.render('login', { title: 'Login' }); 
}; 
module.exports = { index, };