const mongoose = require("mongoose");

const taskModel = require("../models/taskModel.js");
const Task = require("../models/taskModelnoSQL.js");

const bbdd = "nosql";

if (bbdd === "nosql") {
  mongoose.connect("mongodb://localhost:27017/pruebas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

const taskController = {
  getTasks: async function (req, res) {
    if (bbdd === "sql") {
      const getData = await taskModel.getTasks();
      res.json(getData);
    }

    if (bbdd === "nosql") {
      const taskList = await Task.find();
      res.status(200).json({ ...taskList });
    }
  },

  inspectTask: async function (req, res) {
    if (bbdd === "sql") {
      const itemToGet = req.params.id;
      const getData = await taskModel.inspectTask(itemToGet);
      res.send(getData);
    }

    if (bbdd === "nosql") {
      const taskId = req.params.id;
      const myTask = await Task.findById(taskId);
      res.status(200).json(myTask);
    }
  },

  createTask: function (req, res) {
    if (bbdd === "sql") {
      const postData = taskModel.createTask(req.body);
      res.send("¡Añadido!");
    }

    if (bbdd === "nosql") {
      const taskInfo = req.body;

      const task = new Task();
      task.title = taskInfo.title;
      task.description = taskInfo.description;

      task.save((err, savedInfo) => {
        if (err) throw new Error("Ha habido un erro al añadir una tarea", err);

        res.status(200).json({
          message: "Se ha añadido la tarea",
          taskInfo: savedInfo,
        });
      });
    }
  },

  updateTask: async function (req, res) {
    if (bbdd === "sql") {
      const task = req.body;
      const id = req.params.id;
      const updateData = taskModel.updateTask(task, id);
      res.send("¡Modificado!");
    }

    if (bbdd === "nosql") {
      const taskInfo = req.body;
      const id = req.params.id;
      const tasktUpdated = await Task.findByIdAndUpdate(id, {
        title: taskInfo.title,
        description: taskInfo.description,
      });

      tasktUpdated.save((err, savedInfo) => {
        if (err)
          throw new Error("Ha habido un erro al actualizar la tarea", err);

        res.status(200).json({
          message: "Se ha actualizado la tarea",
          taskInfo: savedInfo,
        });
      });
    }
  },

  eraseTask: async function (req, res) {
    if (bbdd === "sql") {
      const itemToDelete = req.params.id;
      const deleteData = await taskModel.eraseTask(itemToDelete);
      res.send("¡Borrado!");
    }

    if (bbdd === "nosql") {
      const id = req.params.id;
      const taskDelted = await Task.findByIdAndDelete(id);
      res.status(200).json({ message: "Tarea eliminada" });
    }
  },
};

module.exports = taskController;
