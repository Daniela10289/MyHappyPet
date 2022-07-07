const express =require('express');

const validatorHandler = require('../middlewares/validatorHandler');
const AppointmentService = require('../services/appointmentService');
const { createAppointmentSchema, getAppointmentSchema, updateAppointmentSchema } = require('../schemas/appointmentSchema');
const {User} = require('../db/models/userModel');
const {Pet} = require('../db/models/petModel');

const router = express.Router();
const service = new AppointmentService();

router.get('/', async (req, res, next) => {
  try {
    const appointments = await service.find({
      include: [{
        model: User, 
        as: "user" ,
        attributes:['id', 'name_user', 'last_name']
      },{
        model: Pet, 
        as: "pet" ,
        attributes:['id', 'name_pet']
      }]
    });
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

router.patch('/:id',
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
