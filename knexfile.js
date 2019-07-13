const ENV = process.env.NODE_ENV || "development";

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seeds"
  }
};

const customConfig = {
  development: {
    connection: {
      database: "golden_shoe"
    }
  },
  test: {
    connection: {
      database: "golden_shoe_test"
    }
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
