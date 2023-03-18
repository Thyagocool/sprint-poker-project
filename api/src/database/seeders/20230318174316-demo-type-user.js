'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('typeusers', [
      {name: 'Developer'},
      {name: 'Tester'},
      {name: 'Scrum Master'},
      {name: 'PO'},
      {name: 'maintainer'}
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('typeusers', null, {});
  }
};
