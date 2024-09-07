'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('emp', [{
      name: "vinit",
      email:"vinit@gmail.com",
      age:10,
      status:true,
      dob:"2024-09-05T05:26:21.041Z",
      updatedAt: "2024-09-05T05:26:21.041Z",
      createdAt: "2024-09-05T05:26:21.041Z"
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('emp', null, {});
  }
};
