'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Heavenly delicious drums",
          content: "These drums are very drumy, with drummy drum drums and drum for every drum in drum drums. Drummy drum drums drummers for drum is the best drums your mouth has every experienced.",
          imageUrl: "https://p0.pikrepo.com/preview/915/473/fried-meat-with-sauce-in-aluminum-foil-thumbnail.jpg",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "#39 student turning vegan",
          content: "When i became vegan 2 years ago, the amount of vegan junk food was AT LEAST 50% of what's available now. The choice overwhelming now. I can choose between like 5 versions of imitation 'meat' ",
          imageUrl: "https://live.staticflickr.com/7817/47279337891_bba8919bb9_b.jpg",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Basketball for life",
          content: "Football, handball, tennisball. So many balls, but nothing is better than the basketball. The sport is cool, and good for weight loss, for healthy as well as unhealthy life styles. Its all up to you. If you want to be a ball, you can be a ball.",
          imageUrl: "https://cdn.pixabay.com/photo/2019/04/15/11/41/the-ball-4129122_960_720.jpg",
          homepageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "To chips or not to chips",
          content: "Last week i discovered this new chips site which opened up a whole new world, just like aladdin. There were all kinds you can imagine, grass chips, gumbum chips, and even popular bad chips. Unfortunately, the site is under construction by something called #39 Redux. If anyone knows what this is please let me know!",
          imageUrl: "https://media.discordapp.net/attachments/712277668611227669/715626346205937798/unknown.png?width=602&height=472",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
   },
 
   down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete("stories", null, {});
 
  }
};
