
exports.up = function(knex) {
  // console.log('creating stock table')
  return knex.schema.createTable('stock', (stockTable) => {
      stockTable.integer('shoe_id').references('shoes.shoe_id');
      stockTable.integer('quantity').defaultTo(0)
      stockTable.integer('size')
      stockTable.primary(['shoe_id', 'size'])
  })
};

exports.down = function(knex) {
    // console.log('dropping stock table')
    return knex.schema.dropTable('stock')
};
