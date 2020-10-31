'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
  }, {});
  User.associate = function(models) {
    User.hasMany(models.PlaceVisited, {
      foreignKey: 'userId'
    });
    User.hasMany(models.MyCollection, {
      foreignKey: 'userId'
    });
    User.hasMany(models.Image, {
      foreignKey: 'userId'
    });
  };
  return User;
};