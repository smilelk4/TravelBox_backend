'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MyWishes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users'
        }
      },
      collectionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'MyCollections'
        }
      },
      title: {
        type: Sequelize.STRING(80),
        allowNull: false
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
      goalSaving: {
        type: Sequelize.NUMERIC,
        defaultValue: 0
      },
      interestLevel: {
        type: Sequelize.NUMERIC,
        defaultValue: 0
      },
      goalDate: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MyWishes');
  }
};