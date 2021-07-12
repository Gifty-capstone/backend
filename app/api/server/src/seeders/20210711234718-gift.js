'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Gifts', [
      {
        name: 'Kendall Barbie',
        description: 'barbies man',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Book',
        description: 'Fun book',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jump rope',
        description: 'For endurance training',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'journal',
        description: 'Write secrets',
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
