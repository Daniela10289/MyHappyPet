const express =require('express');

const validatorHandler = require('../middlewares/validatorHandler');
const AppointmentService = require('../services/appointmentService');
const { createAppointmentSchema, getAppointmentSchema, updateAppointmentSchema } = require('../schemas/appointmentSchema');

const router = express.Router();
const service = new AppointmentService();

router.get('/', async (req, res, next) => {
  try {
    const appointments = await service.find();
    res.json(appointments);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getAppointmentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const findAppointment = await service.findOne(id);
      res.json(findAppointment);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createAppointmentSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newAppointment = await service.create(body);
      res.status(201).json(newAppointment);
    } catch (error) {
      next(error);
    }
  }
);

router.put('/:id',
  validatorHandler(getAppointmentSchema, 'params'),
  validatorHandler(updateAppointmentSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const editAppointments = await service.update(id, body);
      res.json(editAppointments);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getAppointmentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
