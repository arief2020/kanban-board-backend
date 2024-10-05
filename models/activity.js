'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Activity.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      })
      Activity.belongsTo(models.Board, {
        foreignKey: 'board_id',
        as: 'board'
      })
      Activity.belongsTo(models.Card, {
        foreignKey: 'card_id',
        as: 'card'
      })
      Activity.belongsTo(models.List, {
        foreignKey: 'list_id',
        as: 'list'
      })
    }
  }
  Activity.init({
    action: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    board_id: DataTypes.INTEGER,
    card_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};