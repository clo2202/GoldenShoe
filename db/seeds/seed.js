const { styleData, shoeData, stockData } = require("../index");

exports.seed = function(knex, Promise) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
        return knex('styles').insert(styleData).then(() => {
            return knex('shoes').insert(shoeData).then(() => {
                return knex('stock').insert(stockData)
            })
        })
    });
};
