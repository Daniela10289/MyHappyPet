const { User, UserSchema } = require('./userModel');
const { Pet, PetSchema } = require('./petModel');

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Pet.init(PetSchema, Pet.config(sequelize));

  // User.associate(sequelize.models);
}

module.exports = setupModels;
