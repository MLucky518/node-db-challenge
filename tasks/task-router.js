const express = require("express");
const taskDb = require("./task-model");
const projectsDb = require("../projects/project-model");
const router = express.Router();

router.get("/tasks", async (req, res, next) => {
  try {
    const taskList = await taskDb.get();
    res.json(taskList);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/tasks", validateProjectId, async (req, res, next) => {
  try {
    const tasks = await taskDb.getTasks(req.project.id);

    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/tasks", async (req, res, next) => {
  try {
    const data = req.body;
    const newTask = await taskDb.addTask(data, req.params.id);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

async function validateProjectId(req, res, next) {
  try {
    const project = await projectsDb.getProjectById(req.params.id);
    req.project = project;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = router;
