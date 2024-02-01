/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {email: 'user1@example.com'},
        {email: 'user2@example.com'},
        {email: 'user3@example.com'}
      ]);
    });

};
