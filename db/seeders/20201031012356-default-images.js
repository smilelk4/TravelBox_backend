'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Images', [
      {
        userId: 1,
        wishId: 1,
        collectionId: null,
        image: 'https://travel-box-images.s3.us-east-2.amazonaws.com/photo-1514896856000-91cb6de818e0.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: 2,
        collectionId: null,
        image: 'https://travel-box-images.s3.us-east-2.amazonaws.com/photo-1511079985783-abd014cb7794.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: 3,
        collectionId: null,
        image: 'https://travel-box-images.s3.us-east-2.amazonaws.com/photo-1568797662138-41aeadb55a44.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: 5,
        collectionId: null,
        image: 'https://travel-box-images.s3.us-east-2.amazonaws.com/photo-1573464865360-fdd717cc6a6a.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: 6,
        collectionId: null,
        image: 'https://travel-box-images.s3.us-east-2.amazonaws.com/photo-1508804185872-d7badad00f7d.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: 7,
        collectionId: null,
        image: 'https://travel-box-images.s3.us-east-2.amazonaws.com/photo-1493976040374-85c8e12f0c0e.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: null,
        collectionId: 2,
        image: 'https://travel-box-images.s3.us-east-2.amazonaws.com/photo-1526778548025-fa2f459cd5c1.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        wishId: null,
        collectionId: 4,
        image: 'https://travel-box-images.s3.us-east-2.amazonaws.com/photo-1601136939973-5b5dc52a16cb.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
