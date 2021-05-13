'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: "The Innovator's Dilemma",
        price: "15.87",
        publisher: "Harvard Business School Press",
        author: "Clayton M. Christensen",
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        title: "The Effective Engineer",
        price: "29.35",
        publisher: "Effective Bookshelf",
        author: "Edmond Lau",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Obsidian",
        price: "5.9",
        publisher: "Hodder & Stoughton",
        author: "Jennifer L. Armentrout",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "How To Win Friends and Influence People",
        price: "60.54",
        publisher: "HarperTorch",
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
