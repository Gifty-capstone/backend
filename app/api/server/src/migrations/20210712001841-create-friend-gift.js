'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FriendGifts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      friendId: {
        type: Sequelize.INTEGER
      },
      giftId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM('wishlist', 'purchased', 'gifted')
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
    await queryInterface.dropTable('FriendGifts');
  }
};
