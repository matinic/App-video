'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('videos','likes',{
      type: Sequelize.DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn('videos','likes',{
      type: Sequelize.DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: true
    })
  }
};
