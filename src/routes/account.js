const express = require('express');
const AccountControllers = require('../app/controllers/AccountControllers');
const router = express.Router();

router.post('/register', AccountControllers.register);
router.post('/login',AccountControllers.login);

module.exports = router;