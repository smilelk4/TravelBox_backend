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
      MyWish.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      MyWish.belongsTo(models.MyCollection, {
        foreignKey: 'collectionId'
      });

      MyWish.hasMany(models.ToDo, {
        foreignKey: 'wishId'
      });
    }
  };
  MyWish.init({
    userId: DataTypes.INTEGER,
    collectionId: DataTypes.INTEGER,      
    title: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(300)
    },
    country: {
      type: DataTypes.STRING(50)
    },
    regionCity: {
      type: DataTypes.STRING(80)
    },
    goalSaving: DataTypes.STRING,
    interestLevel: DataTypes.STRING,
    goalDate: DataTypes.DATE,
    starred: DataTypes.BOOLEAN,
    accomplished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'MyWish',
  });
  return MyWish;
};