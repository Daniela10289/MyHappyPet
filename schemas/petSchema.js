const Joi = require('joi');

const id = Joi.number().integer();
const id_user = Joi.number().integer();
const name_pet = Joi.string();
const species = Joi.string();
const gender = Joi.string();

const createPetSchema = Joi.object({
  id_user: id_user.required(),
  name_pet: name_pet.required(),
  species: species.required(),
  gender: gender.required(),
});

const updatePetSchema = Joi.object({
  name_pet: name_user,
  species: last_name,
  gender: phone,
});

const getPetSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPetSchema, updatePetSchema, getPetSchema }
