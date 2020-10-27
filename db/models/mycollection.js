'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyCollection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MyCollection.belongsTo(models.User, {
        foreignKey: 'userId'
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