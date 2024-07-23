const { LogIn } = require('../controller/authController');

const router = require('express').Router();

router.route('/login').post(LogIn);

module.exports = router;
