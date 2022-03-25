const { User, UserSchema } = require('./userModel');
const { Pet, PetSchema } = require('./petModel');
const { Appointment, AppointmentSchema } = require('./appointmentModel');

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Pet.init(PetSchema, Pet.config(sequelize));
  Appointment.init(AppointmentSchema, Appointment.config(sequelize));

  // User.associate(sequelize.models);
}

module.exports = setupModels;
