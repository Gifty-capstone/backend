module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Friends', [
      {
        name: 'Kendall',
        birthday: '1990-07-19',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Brian',
        birthday: '1960-05-15',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Juan',
        birthday: '1990-12-29',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Julio',
        birthday: '2000-07-01',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Friends', null, {}),
};
