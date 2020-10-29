'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ToDos', [
      {
        wishId: 1,
        description: 'Need to buy tickets to get in.',
        completed: false,
        goalSaving: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wishId: 1,
        description: 'Want to review some history before I go.',
        completed: false,
        goalSaving: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wishId: 2,
        description: 'Need to see what kind of restaurants are available nearby.',
        completed: false,
        goalSaving: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wishId: 2,
        description: 'I need to ask who else is interested.',
        completed: false,
        goalSaving: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wishId: 4,
        description: 'Find a good souvenir shop nearby.',
        completed: false,
        goalSaving: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wishId: 6,
        description: 'null',
        completed: false,
        goalSaving: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wishId: 5,
        description: 'Is there any days the place is closed?',
        completed: false,
        goalSaving: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        wishId: 8,
        description: 'Find top 5 scuba diving locations.',
        completed: false,
        goalSaving: 0,
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
