'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyCollection extends Model {
    static associate(models) {
      MyCollection.belongsTo(models.User, {
        foreignKey: 'userId'
      });

      MyCollection.hasMany(models.MyWish, {
        foreignKey: 'collectionId'
      });

      MyCollection.hasMany(models.CollectionImage, {
        foreignKey: 'collectionId'
      });
    }
  };
  MyCollection.init({
    userId: DataTypes.INTEGER,
    collectionName: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    description: DataTypes.STRING(300)
  }, {
    sequelize,
    modelName: 'MyCollection',
  });
  return MyCollection;
};