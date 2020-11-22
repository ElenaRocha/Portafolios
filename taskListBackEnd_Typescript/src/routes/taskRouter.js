const express = require("express");
const taskController = require("../controllers/taskController.js");

const router = express.Router();

router.get("/lista-tareas", taskController.getTasks);
router.get("/lista-tareas/:id", taskController.inspectTask);
router.post("/form", taskController.createTask);
router.put("/form/:id", taskController.updateTask);
router.delete("/form/:id", taskController.eraseTask);

module.exports = router;
