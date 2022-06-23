const Joi = require('joi');

const id = Joi.number().integer();
const user_id = Joi.number().integer();
const name_pet = Joi.string();
const breed = Joi.string();
const gender = Joi.string();
const name_user = Joi.string();
const last_name = Joi.string();

const createPetSchema = Joi.object({
  name_pet: name_pet.required(),
  breed: breed.required(),
  gender: gender.required(),
  user_id: user_id.required()
});

const updatePetSchema = Joi.object({
  name_pet: name_pet,
  breed: breed,
  gender: gender,
  user_id: user_id.required()
});

const getPetSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPetSchema, updatePetSchema, getPetSchema }
