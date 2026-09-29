const index = function (req, res) {
  const user = {
    name: 'test',
    email: 'test@example.com',
  };

  res.render('register', { title: 'Register', user });
}; 
module.exports = { index, };