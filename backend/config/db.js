const { Sequelize } = require("sequelize");

// Load environment variables
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // MySQL username
  process.env.DB_PASSWORD, // MySQL password
  {
    host: process.env.DB_HOST || "localhost", // Default to localhost
    dialect: "mysql",
    logging: false, // Disable SQL query logging; enable for debugging if needed
    define: {
      timestamps: true, // Automatically add createdAt & updatedAt
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = sequelize;
