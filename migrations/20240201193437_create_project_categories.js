/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('project_categories', (table) => {
    table.increments('category_id').primary();
    table.string('type', 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('project_categories');
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('project_categories');
  
};
