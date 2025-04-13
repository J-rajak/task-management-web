
const express = require("express");
const router = express.Router();
// const auth = require("../middleware/authMiddleware");
const verifyToken = require("../middleware/authMiddleware");
const {
  getTasks,
  addTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/", verifyToken, getTasks);
router.post("/", verifyToken, addTask);
router.delete("/:id", verifyToken, deleteTask);

module.exports = router;
