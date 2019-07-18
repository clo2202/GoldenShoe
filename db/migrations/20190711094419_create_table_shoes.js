exports.up = function(knex) {
  return knex.schema.createTable("shoes", shoesTable => {
    shoesTable.increments("shoe_id").primary();
    shoesTable.string("shoe_name");
    shoesTable.decimal("price");
    shoesTable.integer("style_id").references("styles.style_id");
    shoesTable.string("description", 5000).notNullable();
    shoesTable.string('image_url', 500)
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("shoes");
};
