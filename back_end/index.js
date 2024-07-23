//imports
require('dotenv').config({ path: `${process.cwd()}/.env` });
const express = require('express');
const authRouter = require('./routes/authRoute');

//app
const app = express();
//middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from syaarty'
  });
});

//routes
app.use('/auth', authRouter);

// 404
app.use('*', (req, res, next) => {
  res.status(404).json({
    message: 'Route not found'
  });
});

//server
const port = process.env.APP_PORT || 4000;
app.listen(port, () => console.log(`app listening on port ${port}!`));
