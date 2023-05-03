const express = require('express');
const router = express.Router();
const CustomerControllers = require('../app/controllers/CustomerControllers');

router.post('/register', CustomerControllers.regiserCustomer);
router.post('/login', CustomerControllers.loginCustomer);

module.exports = router;