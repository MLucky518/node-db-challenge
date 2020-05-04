const express = require("express");
const projectRouter = require("./projects/projects-router");
const taskRouter = require("./tasks/task-router");
const resourceRouter = require("./resources/resource-router");
const resourceDb = require("./resources/resource-model");
const taskDb = require("./tasks/task-model");
const server = express();

server.use(express.json());
server.use("/projects", projectRouter);
server.use("/projects", taskRouter);
server.use("/projects", resourceRouter);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: "ERROR",
  });
});

server.get("/resources", async (req, res, next) => {
  try {
    const resources = await resourceDb.get();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

server.get("/tasks", async (req, res, next) => {
    try {
      const tasks = await taskDb.get();
      res.json(tasks);
    } catch (err) {
      next(err);
    }
  });

server.get("/", (req, res, next) => {
  res.json({
    message: "ayyyyy",
  });
});

module.exports = server;
