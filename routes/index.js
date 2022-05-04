const express = require('express');

const authRouter = require('./authRouter');
const usersRouter = require('./usersRouter');
const petsRouter = require('./petsRouter');
const appointmentsRouter = require('./appointmentsRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/auth', authRouter);
  router.use('/users', usersRouter);
  router.use('/pets', petsRouter);
  router.use('/appointments', appointmentsRouter);
}

module.exports = routerApi;
