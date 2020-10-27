'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'demo_user',
        firstName: 'de',
        lastName: 'mo',
        email: 'demo@demo.com',
        hashedPassword:'$2b$10$WdnORAEPHjhPcI4bJKApyubiJiIRXtPpYIi997yicx2uxqLoXY/I6',
        profileImage: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
