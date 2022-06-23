const express =require('express');

const validatorHandler = require('./../middlewares/validatorHandler');
const PetService = require('./../services/petService');
const { createPetSchema, getPetSchema, updatePetSchema } = require('./../schemas/petSchema');
const {User} = require('../db/models/userModel');

const router = express.Router();
const service = new PetService();

router.get('/', async (req, res, next) => {
  try {
    const pets = await service.find({
      include: {
        model: User, 
        as: "user" ,
        attributes:['id', 'name_user', 'last_name']
      }
    });
    res.json(pets);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getPetSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const findPet = await service.findOne(id);
      res.json(findPet);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createPetSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPet = await service.create(body);
      res.status(201).json(newPet);
    } catch (error) {
      next(error);
    }
  }
);

router.put('/:id',
  validatorHandler(getPetSchema, 'params'),
  validatorHandler(updatePetSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const editPet = await service.update(id, body);
      res.json(editPet);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getPetSchema, 'params'),
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
