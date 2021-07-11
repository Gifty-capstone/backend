module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    name: 'Joey',
    email: 'josepthaas@gmail.com',
    birthday: '1989-09-29',
    icon: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Brisa',
    email: 'brisa@gmail.com',
    birthday: '1950-09-29',
    icon: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ]),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
