/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = function(knex) {
  return knex('project_categories').del()
    .then(function () {
      return knex('project_categories').insert([
        {type: 'Work'},
        {type: 'Homelab'},
        {type: 'Personal Project'},
      ]);
    });
};
