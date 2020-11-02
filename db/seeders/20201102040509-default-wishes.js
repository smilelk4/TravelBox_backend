'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('MyWishes', [
      {
        userId: 1,
        collectionId: 1,
        title: 'Flavian Amphitheatre',
        description: 'Colosseum',
        country: 'Italy',
        regionCity: 'Rome',
        goalSaving: 100,
        interestLevel: 8,
        goalDate: new Date(2026),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 1,
        title: 'Pantheon',
        description: 'Want to see the vaulted ceiling.',
        country: 'Italy',
        regionCity: 'Rome',
        goalSaving: 0,
        interestLevel: 10,
        goalDate: new Date(2026),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 1,
        title: 'Roman Forum',
        description: 'Take a stroll around. Planning on spending at least 2 hours there.',
        country: 'Italy',
        regionCity: 'Rome',
        goalSaving: 20,
        interestLevel: 6,
        goalDate: new Date(2026),
        starred: false,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 1,
        title: 'Trevi Fountain',
        description: 'Astounding sculptures there.',
        country: 'Italy',
        regionCity: 'Rome',
        goalSaving: 0,
        interestLevel: 8,
        goalDate: new Date(2026),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 1,
        title: 'Palatine Hill',
        description: 'Need to research more.',
        country: 'Italy',
        regionCity: 'Rome',
        goalSaving: 0,
        interestLevel: 9,
        goalDate: new Date(2026),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 2,
        title: 'Great Wall of China',
        description: 'Interesting history behind it.',
        country: 'China',
        regionCity: '',
        goalSaving: 0,
        interestLevel: 9,
        goalDate: new Date(2025, 6),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 2,
        title: 'Seoul',
        description: 'Want to do some shopping.',
        country: 'Korea',
        regionCity: 'Seoul',
        goalSaving: 0,
        interestLevel: 9,
        goalDate: new Date(2025, 6),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 2,
        title: 'Great Pyramid of Giza',
        description: 'One of the Seven Wonders of the Ancient World.',
        country: 'Egypt',
        regionCity: 'Greater Cairo',
        goalSaving: 180,
        interestLevel: 9,
        goalDate: new Date(2021, 10, 18),
        starred: false,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 2,
        title: 'Kyoto',
        description: 'I\'ve heard the nature is beautiful there.',
        country: 'Japan',
        regionCity: 'Kyoto',
        goalSaving: 500,
        interestLevel: 9,
        goalDate: new Date(2022, 8, 11),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 2,
        title: 'Cozumel',
        description: 'Maybe eat some seafood there.',
        country: 'Mexico',
        regionCity: 'Cozumel',
        goalSaving: 450,
        interestLevel: 7,
        goalDate: new Date(2023, 2, 11),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        collectionId: 4,
        title: 'Scuba Diving',
        description: 'Looking for a good beach.',
        country: 'USA',
        regionCity: 'Miami, FL',
        goalSaving: 800,
        interestLevel: 9,
        goalDate: new Date(2020, 12, 9),
        starred: true,
        accomplished: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MyWishes', null, {});
  }
};