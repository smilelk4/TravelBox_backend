'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ToDo.belongsTo(models.MyWish, {
        foreignKey: 'wishId'
      });
    }
  };
  ToDo.init({
    wishId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: DataTypes.STRING(50),
    description: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    targetSaving: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'ToDo',
  });
  return ToDo;
};