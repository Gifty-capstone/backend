'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    static associate(models) {
      Friend.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
      Friend.belongsToMany(models.Gift, {
        through: 'FriendGift',
        as: 'gifts',
        foreignKey: 'friendId'
      });
    }
  };
  Friend.init({
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    icon: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Friend',
  });
  return Friend;
};
