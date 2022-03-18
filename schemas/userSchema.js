const Joi = require('joi');

const id = Joi.number().integer();
const document = Joi.number().min(7);
const name_user = Joi.string().min(3);
const last_name = Joi.string().min(3);
const phone = Joi.number().min(7);

const createUserSchema = Joi.object({
  document: document.required(),
  name_user: name_user.required(),
  last_name: last_name.required(),
  phone: phone.required(),
});

const updateUserSchema = Joi.object({
  name_user: name_user,
  last_name: last_name,
  phone: phone,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
