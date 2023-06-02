const express = require('express');
const userControl = require('../controllers/user.js');

const router = express.Router();

router.post('/signup',userControl.signup);
router.post('/login',userControl.login);

module.exports = router;