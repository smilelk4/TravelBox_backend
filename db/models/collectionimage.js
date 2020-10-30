'use strict';
module.exports = (sequelize, DataTypes) => {
  const CollectionImage = sequelize.define('CollectionImage', {
    collectionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  CollectionImage.associate = function(models) {
    CollectionImage.belongsTo(models.MyCollection, {
      foreignKey: 'collectionId'
    });
  };
  return CollectionImage;
};