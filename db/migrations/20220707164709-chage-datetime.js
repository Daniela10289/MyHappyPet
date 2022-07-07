'use strict';

const { appointmentSchema, APPOINTMENT_TABLE } = require('./../models/appointmentModel');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(APPOINTMENT_TABLE, 'star_datetime', 'start_datetime', {
      type: Sequelize.DATE
    });

    await queryInterface.changeColumn(APPOINTMENT_TABLE, 'end_datetime', {
      type: Sequelize.DATE
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(APPOINTMENT_TABLE, 'star_datetime'); 
    await queryInterface.removeColumn(APPOINTMENT_TABLE, 'end_datetime');
  }
};