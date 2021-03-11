const express = require('express');
const userRouter = require('./api/user/user.routes');
const empRouter = require('./api/employee');
const { connect } = require('./database');
const app = express();
connect();

app.use('/user', userRouter);
app.use('/emp', empRouter);

app.use((req,res,next) => {
  console.log('req',req.url);
  res.status(404).json({
    message : req.url + 'API does not exists'
  })
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});