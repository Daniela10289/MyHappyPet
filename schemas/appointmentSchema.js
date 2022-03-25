const Joi = require('joi');

const id = Joi.number().integer();
const user_id = Joi.number().integer();
const pet_id = Joi.number().integer();
const star_datetime = Joi.string().isoDate();
const end_datetime = Joi.string().isoDate();
const title = Joi.string();
const description = Joi.string();

const createAppointmentSchema = Joi.object({
  user_id: user_id.required(),
  pet_id: pet_id.required(),
  star_datetime: star_datetime.required(),
  end_datetime: end_datetime.required(),
  title: title.required(),
  description: description,
});

const updateAppointmentSchema = Joi.object({
  star_datetime: star_datetime,
  end_datetime: end_datetime,
  title: title,
  description: description,
});

const getAppointmentSchema = Joi.object({
  id: id.required(),
});

module.exports = { createAppointmentSchema, updateAppointmentSchema, getAppointmentSchema }
