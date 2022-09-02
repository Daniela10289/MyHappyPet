const { Model, DataTypes, Sequelize} = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  document: {
    allowNull: false,
    type: DataTypes.STRING,
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
    type: DataTypes.STRING
  },
  // email: {
  //   allowNull: true,
  //   type: DataTypes.STRING
  // },
  // password: {
  //   allowNull: true,
  //   type: DataTypes.STRING
  // },
  // role: {
  //   allowNull: true,
  //   type: DataTypes.STRING,
  //   defaultValue: 'customer'
  // },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {

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
