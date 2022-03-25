'use strict';

const { AppointmentSchema, APPOINTMENT_TABLE } = require('./../models/appointmentModel')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(APPOINTMENT_TABLE, AppointmentSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(APPOINTMENT_TABLE);
  }
};
