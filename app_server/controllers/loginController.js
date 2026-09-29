const index = function (req, res) {
  const user = { email: 'test@example.com' };

  res.render('login', { title: 'Login', user });
};
module.exports = { index, };