'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FriendGift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Gift.belongsToMany(models.Friend, {
        through: 'FriendGift',
        as: 'friends',
        foreignKey: 'giftId'
      });
    }
  };
  FriendGift.init({
    friendId: DataTypes.INTEGER,
    giftId: DataTypes.INTEGER,
    status: DataTypes.ENUM('wishlist', 'purchased', 'gifted')
  }, {
    sequelize,
    modelName: 'FriendGift',
  });
  return FriendGift;
};
