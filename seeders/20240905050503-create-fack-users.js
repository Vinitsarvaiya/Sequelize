'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('users', [{
      uuid: null,
      name: "JAY",
      email: "jay@gmail.com",
      role: "student",
      createdAt: "2024-09-05T04:15:58.958Z",
      updatedAt: "2024-09-05T05:02:05.301Z"
    },
    {
      uuid: null,
      name: "PRINCE",
      email: "prince@gmail.com",
      role: "student",
      createdAt: "2024-09-05T04:15:58.958Z",
      updatedAt: "2024-09-05T05:02:05.301Z"
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, {});
  }
};
