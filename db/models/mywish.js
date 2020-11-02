'use strict';
module.exports = (sequelize, DataTypes) => {
  const MyWish = sequelize.define('MyWish', {
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
  }, {});
  MyWish.associate = function(models) {
    MyWish.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    MyWish.belongsTo(models.MyCollection, {
      foreignKey: 'collectionId'
    });

    MyWish.hasMany(models.ToDo, {
      foreignKey: 'wishId',
      onDelete: 'CASCADE',
      hooks: true
    });

    MyWish.hasMany(models.Image, {
      foreignKey: 'wishId',
      onDelete: 'CASCADE',
      hooks: true
    });
  };
  return MyWish;
};