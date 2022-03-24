const express = require('express');

const usersRouter = require('./usersRouter');
const petsRouter = require('./petsRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/users', usersRouter);
  router.use('/pets', petsRouter);
}

module.exports = routerApi;
