'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Gift.belongsToMany(models.Friend, {
        through: 'FriendGift',
        as: 'gifts',
        foreignKey: 'giftID'
      });
    }
  };
  Gift.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gift',
  });
  return Gift;
};
