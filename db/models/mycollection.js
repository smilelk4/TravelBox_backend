'use strict';
module.exports = (sequelize, DataTypes) => {
  const MyCollection = sequelize.define('MyCollection', {
    userId: DataTypes.INTEGER,
    collectionName: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    description: DataTypes.STRING(300)
  }, {});
  MyCollection.associate = function(models) {
    MyCollection.belongsTo(models.User, {
      foreignKey: 'userId'
    });

    MyCollection.hasMany(models.MyWish, {
      foreignKey: 'collectionId',
      onDelete: 'CASCADE',
      hooks: true
    });

    MyCollection.hasMany(models.Image, {
      foreignKey: 'collectionId',
      onDelete: 'CASCADE',
      hooks: true
    });
  };
  return MyCollection;
};