/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {name: 'Tech Innovations', description: 'Dummy company data for testing purposes.'},
        {name: 'GreenTech Solutions', description: 'More dummy data for testing purposes.'},
        {name: 'CyberSecure', description: 'Even more dummy data for testing purposes.'},
      ]);
    });
};
