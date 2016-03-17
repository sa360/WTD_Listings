'use strict';
module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define('Listing', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    country: DataTypes.STRING,
    // state: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    free: DataTypes.BOOLEAN,
    category: DataTypes.STRING,
    // imagename: DataTypes.STRING,
    // image: DataTypes.BYTEA,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    live: DataTypes.BOOLEAN,
    approved: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Listing;
};
