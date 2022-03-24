'use strict';

const { PetSchema, PET_TABLE } = require('./../models/petModel')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PET_TABLE, PetSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PET_TABLE);
  }
};
