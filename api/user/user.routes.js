const express = require('express');
const { getAllUser , createUser , getUserById } = require('./user.controller');
const userRouter = express.Router();

userRouter.get('/',getAllUser);

userRouter.get('/:id', getUserById);

userRouter.post('/', createUser);

module.exports = userRouter;