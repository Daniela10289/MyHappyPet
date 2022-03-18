const { Model, DataTypes, Sequelize} = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false, // no se permiten nulos
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_user: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true

  },
  name_user: {
    allowNull: false,
    type: DataTypes.STRING
  },
  last_name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.INTEGER
    // defaultValue: '0'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  static associate(models) {
    // this.hasOne(models.Customer, {
    //   as: 'customer',
    //   foreignKey: 'userId'
    // });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false // crea campos por defecto
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User }
