'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
        {
          title: "Post one",
          slug: "Post-one",
          body: "Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, tempus diam mattis nunc maecenas ornare aptent, libero nascetur cras eleifend ullamcorper magna morbi.",
          author: "Clayton M. Christensen",
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          title: "Post two",
          slug: "Post-two",
          body: "Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, tempus diam mattis nunc maecenas ornare aptent, libero nascetur cras eleifend ullamcorper magna morbi.",
          author: "Edmond Lau",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Post three",
          slug: "Post-three",
          body: "Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, tempus diam mattis nunc maecenas ornare aptent, libero nascetur cras eleifend ullamcorper magna morbi.",
          author: "Jennifer L. Armentrout",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Post four",
          slug: "Post-four",
          body: "Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, tempus diam mattis nunc maecenas ornare aptent, libero nascetur cras eleifend ullamcorper magna morbi.",
          author: "Dale Carnegie",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
