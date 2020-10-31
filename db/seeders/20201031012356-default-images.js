'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        wishId: 1,
        collectionId: null,
        image: 'https://images.unsplash.com/photo-1514896856000-91cb6de818e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: 2,
        collectionId: null,
        image: 'https://images.unsplash.com/photo-1511079985783-abd014cb7794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: 3,
        collectionId: null,
        image: 'https://images.unsplash.com/photo-1568797662138-41aeadb55a44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: 5,
        collectionId: null,
        image: 'https://images.unsplash.com/photo-1573464865360-fdd717cc6a6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: 6,
        collectionId: null,
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: 7,
        collectionId: null,
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: null,
        collectionId: 2,
        image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1033&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: null,
        collectionId: 4,
        image: 'https://images.unsplash.com/photo-1601136939973-5b5dc52a16cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
