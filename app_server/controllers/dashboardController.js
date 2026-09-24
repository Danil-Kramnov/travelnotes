const index = function (req, res) { 
    res.render('dashboard', { title: 'Dashboard' }); 
}; 
module.exports = { index, };