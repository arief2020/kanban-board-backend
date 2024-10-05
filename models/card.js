'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here,

      Card.belongsTo(models.List, {
        foreignKey: 'list_id',
        as: 'list'
      })

      Card.hasMany(models.Comment, {
        foreignKey: 'card_id',
        as: 'comments'
      })

      Card.hasMany(models.Activity, {
        foreignKey: 'card_id',
        as: 'activities'
      })

    }
  }
  Card.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    due_date: DataTypes.DATE,
    list_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};