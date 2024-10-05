'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasMany(models.Board, {
        foreignKey: 'user_id',
        as: 'boards'
      })

      User.hasMany(models.Activity, {
        foreignKey: 'user_id',
        as: 'activities'
      })

      User.hasMany(models.Comment, {
        foreignKey: 'user_id',
        as: 'comments'
      })
      
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};