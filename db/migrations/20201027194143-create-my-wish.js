'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MyWishes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      collectionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'MyCollections'
        }
      },
      description: {
        type: Sequelize.STRING(300)
      },
      country: {
        type: Sequelize.STRING(50)
      },
      regionCity: {
        type: Sequelize.STRING(80)
      },
      targetSaving: {
        type: Sequelize.NUMERIC
      },
      interestLevel: {
        type: Sequelize.NUMERIC
      },
      targetDate: {
        type: Sequelize.DATE
      },
      starred: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      accomplished: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MyWishes');
  }
};