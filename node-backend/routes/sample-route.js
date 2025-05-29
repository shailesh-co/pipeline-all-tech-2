const express = require('express');
const router = express.Router();
const { registerUser } = require('../controller/sample-controller');

router.post('/register', registerUser);

module.exports = router;
