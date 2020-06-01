'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     "homepages",
     [
       {
         title: "Foodpage",
         description: "All about food",
         backgroundColor: "#FFB6C1",
         color: "#000000",
         userId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        title: "Sportspage",
        description: "All about sports",
        backgroundColor: "#000000",
        color: "#ffffff",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     ],
     {}
   )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});

  }
};
