// AddUser function
const user = require('../db/models/user');

const AddUser = (req, res) => {
  const body = req.body;
  if (!['0', '1'].includes(body.userType)) {
    return res.status(400).json({
      message: 'Invalid user type'
    });
  }

  const newUser = user.create({});
};

//LogIn function

const LogIn = (req, res) => {
  const body = req.body;
  if (!['1', '2'].includes(body.userType)) {
    return res.status(400).json({
      message: 'Invalid user type'
    });
  }
};

module.exports = {
  LogIn,
  AddUser
};
