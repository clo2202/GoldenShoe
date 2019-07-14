const { connection } = require("../connection");

exports.fetchShoes = ({ shoe_id }, { size }) => {
  return connection("shoes")
    .select("*")
    .join("styles", "styles.style_id", "=", "shoes.style_id")
    .join("stock", "stock.shoe_id", "=", "shoes.shoe_id")
    .modify(query => {
      if (shoe_id) query.where({ "shoes.shoe_id": shoe_id });
      if (size) query.where({"stock.size": size}).andWhere('stock.quantity', ">", 0)
    });
};
