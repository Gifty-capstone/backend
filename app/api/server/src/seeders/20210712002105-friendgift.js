'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('FriendGifts', [
        {
          friendId: 1,
          giftId: 1,
          status: 'wishlist',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          friendId: 1,
          giftId: 2,
          status: 'wishlist',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          friendId: 2,
          giftId: 3,
          status: 'purchased',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          friendId: 2,
          giftId: 1,
          status: 'purchased',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
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
