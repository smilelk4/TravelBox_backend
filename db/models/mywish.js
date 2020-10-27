'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyWish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MyWish.belongsTo(models.MyCollection, {
        foreignKey: 'collectionId'
      });

      MyWish.hasMany(models.ToDo, {
        foreignKey: 'wishId'
      });
    }
  };
  MyWish.init({
    collectionId: DataTypes.INTEGER,
    description: {
        type: Sequelize.STRING(300)
    },
    country: {
      type: Sequelize.STRING(50)
    },
    regionCity: {
      type: Sequelize.STRING(80)
    },
    targetSaving: DataTypes.STRING,
    interestLevel: DataTypes.STRING,
    targetDate: DataTypes.DATE,
    starred: DataTypes.BOOLEAN,
    accomplished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'MyWish',
  });
  return MyWish;
};