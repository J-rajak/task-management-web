// controllers/taskController.js
const Task = require("../models/TaskModel");

exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll({ where: { UserId: req.user.id } });
  res.json(tasks);
};

exports.addTask = async (req, res) => {
  const { title, description } = req.body;
  const task = await Task.create({ title, description, UserId: req.user.id });
  res.status(201).json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.destroy({ where: { id: req.params.id, UserId: req.user.id } });
  res.json({ message: "Task deleted" });
};
