'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     "homepages",
     [
       {
         title: "foodpage",
         description: "All about food",
         backgroundColor: "#ffffff",
         color: "#000000",
         userId: 2,
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
        title: "sportspage",
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
