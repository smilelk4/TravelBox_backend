'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.PlaceVisited, {
        foreignKey: 'userId'
      });
    }
    static associate(models) {
      User.hasMany(models.MyCollection, {
        foreignKey: 'userId'
      });
    }
    static associate(models) {
      User.hasMany(models.Image, {
        foreignKey: 'userId'
      });
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(55),
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },
    profileImage: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};