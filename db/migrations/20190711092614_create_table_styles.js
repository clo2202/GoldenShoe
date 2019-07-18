
exports.up = function(knex) {
  return knex.schema.createTable('styles', (stylesTable) => {
      stylesTable.increments('style_id').primary();
      stylesTable.string('style_name').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('styles')
};
