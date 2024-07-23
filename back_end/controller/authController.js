const LogIn = (req, res) => {
  const body = req.body;
  if (!['1', '2'].includes(body.userType)) {
    return res.status(400).json({
      message: 'Invalid user type'
    });
  }
};

module.exports = {
  LogIn
};
