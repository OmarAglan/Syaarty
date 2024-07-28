const { LogIn, AddUser } = require('../controller/authController');

const router = require('express').Router();

router.route('/login').post(LogIn);
router.route('/register').post(AddUser);

module.exports = router;
