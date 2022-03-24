const Joi = require('joi');

const id = Joi.number().integer();
const document = Joi.string();
const name_user = Joi.string();
const last_name = Joi.string();
const phone = Joi.string();

const createUserSchema = Joi.object({
  document: document.required(),
  name_user: name_user.required(),
  last_name: last_name.required(),
  phone: phone.required(),
});

const updateUserSchema = Joi.object({
  document: document,
  name_user: name_user,
  last_name: last_name,
  phone: phone,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
