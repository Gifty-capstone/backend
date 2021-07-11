'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Friend.belongsTo(models.User, {
				foreignKey: "userId",
				onDelete: "CASCADE",
				as: "createdBy"
			});    }
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