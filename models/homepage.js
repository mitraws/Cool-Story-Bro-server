'use strict';
module.exports = (sequelize, DataTypes) => {
  const homepage = sequelize.define('homepage', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    backgroundColor: DataTypes.STRING,
    color: DataTypes.STRING,
    userid: DataTypes.INTEGER
  }, {});
  homepage.associate = function(models) {
    // associations can be defined here
  };
  return homepage;
};