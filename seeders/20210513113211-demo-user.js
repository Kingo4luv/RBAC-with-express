'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      //Add seed commands here.
      await queryInterface.bulkInsert('Users', [
        {
          name: 'John Doe',
          email: 'johndoe@email.com',
          password: 'password',
          role: "super admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jane Doe',
          email: 'janedoe@email.com',
          password: 'password',
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'James Doe',
          email: 'joedoe@email.com',
          password: 'password',
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Joe Doe',
          email: 'joedoe@email.com',
          password: 'password',
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
