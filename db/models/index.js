const { User, UserSchema } = require('./userModel');
const { Pet, PetSchema } = require('./petModel');
const { Appointment, AppointmentSchema } = require('./appointmentModel');

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Pet.init(PetSchema, Pet.config(sequelize));
  Appointment.init(AppointmentSchema, Appointment.config(sequelize));

  // Appointment.associate(sequelize.models);
  User.hasMany(Pet,{
    foreignKey: 'id',
    as:'pets'
  });
  Pet.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
  }); 
  Appointment.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
  });
  Appointment.belongsTo(Pet, {
    foreignKey: 'pet_id',
    as: 'pet'
  });
}

module.exports = setupModels;
