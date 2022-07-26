const Joi = require('joi');

const id = Joi.number().integer();
const user_id = Joi.number().integer();
const pet_id = Joi.number().integer();
const start_time = Joi.string().isoDate();
const end_time = Joi.string().isoDate();
const title = Joi.string();
const description = Joi.string();

const createAppointmentSchema = Joi.object({
  user_id: user_id.required(),
  pet_id: pet_id.required(),
  start_time: start_time.required(),
  end_time: end_time.required(),
  title: title.required(),
  description: description
});

const updateAppointmentSchema = Joi.object({
  start_time: start_time,
  end_time: end_time,
  title: title,
  description: description,
  user_id: user_id,
  pet_id: pet_id
});

const getAppointmentSchema = Joi.object({
  id: id.required(),
});

module.exports = { createAppointmentSchema, updateAppointmentSchema, getAppointmentSchema }
