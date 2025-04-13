
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./UserModel");

const Task = sequelize.define("Task", {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
});

User.hasMany(Task);
Task.belongsTo(User);

module.exports = Task;

