'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlaceVisited extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      PlaceVisited.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  };
  PlaceVisited.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country: DataTypes.STRING(50),
    regionCity: DataTypes.STRING(80)
  }, {
    sequelize,
    modelName: 'PlaceVisited',
  });
  return PlaceVisited;
};