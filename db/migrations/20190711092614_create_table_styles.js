
exports.up = function(knex) {
  // console.log('creating styles table ...');
  return knex.schema.createTable('styles', (stylesTable) => {
      stylesTable.increments('style_id').primary();
      stylesTable.string('style_name').notNullable();
  });
};

exports.down = function(knex) {
  // console.log('dropping styles table');
  return knex.schema.dropTable('styles')
};
