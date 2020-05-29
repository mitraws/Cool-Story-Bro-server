'use strict';
module.exports = (sequelize, DataTypes) => {
  const homepage = sequelize.define('homepage', {
    title: {type: DataTypes.STRING, allowNull: false},
    description: DataTypes.TEXT,
    backgroundColor: DataTypes.STRING,
    color: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  homepage.associate = function(models) {
    homepage.belongsTo(models.user);
    homepage.hasMany(models.story);
  };
  return homepage;
};