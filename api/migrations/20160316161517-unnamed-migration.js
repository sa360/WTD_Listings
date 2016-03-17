'use strict';

module.exports = {
  up: function (migration, DataTypes, done) {
    migration.addColumn(
      'Users',
      'listing_ids',
      {
          type:DataTypes.STRING
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
