'use strict';

const { USER_TABLE } = require('./../models/userModel')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
        return Promise.all([
            queryInterface.changeColumn(USER_TABLE, 'document', {
                type: Sequelize.STRING
            }, { transaction: t }),
            queryInterface.changeColumn(USER_TABLE, 'phone', {
                type: Sequelize.STRING,
            }, { transaction: t })
        ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
          queryInterface.changeColumn(USER_TABLE, 'document', {
              type: Sequelize.INTEGER
          }, { transaction: t }),
          queryInterface.changeColumn(USER_TABLE, 'phone', {
              type: Sequelize.INTEGER,
          }, { transaction: t })
      ])
  })
  }
};
