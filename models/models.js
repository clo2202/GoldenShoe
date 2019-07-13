const { connection } = require("../connection");

exports.fetchShoes = ({ shoe_id }) => {
  return connection("shoes")
    .select("*")
    .join("styles", "styles.style_id", "=", "shoes.style_id")
    .join("stock", "stock.shoe_id", "=", "shoes.shoe_id")
    .modify(query => {
      if (shoe_id) query.where({ "shoes.shoe_id": shoe_id });
    });
};
