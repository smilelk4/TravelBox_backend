'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('MyWishes', [
      {
        userId: 1,
        collectionId: 1,
        description: 'Flavian Amphitheatre',
        country: 'Italy',
        regionCity: 'Rome',
        targetSaving: 100,
        interestLevel: 8,
        targetDate: new Date(),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 1,
        description: 'Pantheon',
        country: 'Italy',
        regionCity: 'Rome',
        targetSaving: 0,
        interestLevel: 10,
        targetDate: new Date(),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 1,
        description: 'Roman Forum',
        country: 'Italy',
        regionCity: 'Rome',
        targetSaving: 20,
        interestLevel: 6,
        targetDate: new Date(),
        starred: false,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 1,
        description: 'Trevi Fountain',
        country: 'Italy',
        regionCity: 'Rome',
        targetSaving: 0,
        interestLevel: 8,
        targetDate: new Date(),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 1,
        description: 'Palatine Hill',
        country: 'Italy',
        regionCity: 'Rome',
        targetSaving: 0,
        interestLevel: 9,
        targetDate: new Date(),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 2,
        description: 'Great Wall of China',
        country: 'China',
        regionCity: '',
        targetSaving: 0,
        interestLevel: 9,
        targetDate: new Date(),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 2,
        description: 'Kyoto',
        country: 'Japan',
        regionCity: '',
        targetSaving: 500,
        interestLevel: 9,
        targetDate: new Date(),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 4,
        description: 'Scuba Diving',
        country: 'USA',
        regionCity: 'Miami, FL',
        targetSaving: 800,
        interestLevel: 9,
        targetDate: new Date(),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
