const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class PetService {
  constructor() {}

  async create(data) {
    const newPet = await models.Pet.create(data);
    return newPet;
  }

  async find(attrs, user_id) {
    let where = {}
    
    if (user_id) {
      where['user_id'] = user_id
    }

    if (Object.keys(where).length) {
      attrs['where'] = where
    }

    const rta = await models.Pet.findAll(attrs);

    return rta;
  }

  async findOne(id) {
    const pet = await models.Pet.findByPk(id);
    if (!pet) {
      throw boom.notFound('pet not found');
    }
    return pet;
  }

  async update(id, changes) {
    const pet = await this.findOne(id);
    const rta = await pet.update(changes);
    return rta;
  }

  async delete(id) {
    const pet = await models.Pet.findByPk(id);
    await pet.destroy();
    return { id };
  }
}

module.exports = PetService;
