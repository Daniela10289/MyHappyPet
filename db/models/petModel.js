const { Model, DataTypes, Sequelize} = require('sequelize');

const { USER_TABLE } = require('./userModel');

const PET_TABLE = 'pets';

const PetSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name_pet: {
    allowNull: false,
    type: DataTypes.STRING
  },
  breed: {
    allowNull: false,
    type: DataTypes.STRING
  },
  gender: {
    allowNull: false,
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Pet extends Model {
  static associate(models) {
    // this.hasOne(models.Customer, {
    //   as: 'customer',
    //   foreignKey: 'userId'
    // });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PET_TABLE,
      modelName: 'Pet',
      timestamps: false 
    }
  }
}


module.exports = {PET_TABLE, PetSchema, Pet }
