const express = require('express'); 
const router = express.Router(); 
const ctrlRegister = require('../controllers/registerController'); 
const ctrlLogin = require('../controllers/loginController'); 
const ctrlDashboard = require('../controllers/dashboardController'); 

router.get('/register', ctrlRegister.index); 
router.get('/login', ctrlLogin.index); 
router.get('/dashboard', ctrlDashboard.index);
 
router.get('/', (req, res) => res.redirect('/login')); 

module.exports = router;