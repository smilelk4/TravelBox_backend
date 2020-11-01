'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('MyCollections', [
      {
        userId: 1,
        collectionName: 'Italy Trip',
        description: 'Planning a week there.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionName: 'Around the World',
        description: 'Planning on taking half a year to scroll around the world.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionName: 'Road Trip to the South',
        description: 'Planning with some friends. Aiming for early next year.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionName: 'Beach Vacation',
        description: 'Maybe Key West?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MyCollections', null, {});
  }
};
