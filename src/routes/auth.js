const express = require('express');
const router = express.Router();
const userControllers = require('../app/controllers/UserControllers');

router.post('/register', userControllers.regiserUser);
router.post('/login', userControllers.loginUser);

module.exports = router;