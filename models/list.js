'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      List.belongsTo(models.Board, {
        foreignKey: 'board_id',
        as: 'board'
      })

      List.hasMany(models.Card, {
        foreignKey: 'list_id',
        as: 'cards'
      })

      List.hasMany(models.Activity, {
        foreignKey: 'list_id',
        as: 'activities'
      })
    }
  }
  List.init({
    name: DataTypes.STRING,
    board_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'List',
  });
  return List;
};