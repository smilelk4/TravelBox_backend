'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wishId: {
      type: DataTypes.INTEGER,
    },
    collectionId: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Image.belongsTo(models.MyWishes, {
      foreignKey: 'wishId'
    });
    Image.belongsTo(models.MyCollection, {
      foreignKey: 'collectionId'
    });
  };
  return Image;
};