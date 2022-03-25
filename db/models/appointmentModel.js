const { Model, DataTypes, Sequelize} = require('sequelize');

const { USER_TABLE } = require('./userModel');
const { PET_TABLE } = require('./petModel');

const APPOINTMENT_TABLE = 'appointment';

const AppointmentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  star_datetime: {
    allowNull: false,
    type: DataTypes.STRING
  },
  end_datetime: {
    allowNull: false,
    type: DataTypes.STRING
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING
  },
  user_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  pet_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PET_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Appointment extends Model {
  static associate(models) {
    // this.hasOne(models.Customer, {
    //   as: 'customer',
    //   foreignKey: 'userId'
    // });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: APPOINTMENT_TABLE,
      modelName: 'Appointment',
      timestamps: false 
    }
  }
}


module.exports = {APPOINTMENT_TABLE, AppointmentSchema, Appointment }
