const express = require("express");
const projectsDb = require("./project-model");


const router = express.Router();



router.get("/", async (req, res, next) => {
  try {
    const projectsList = await projectsDb.getProjects();
    if (!projectsList) {
      res.status(404).json({
        message: "could not retrieve projects",
      });
    }
    res.status(200).json(projectsList);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", validateProjectId, async (req, res, next) => {
  try {
    await res.status(200).json(req.project);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const newProject = await projectsDb.addProject(data);
    res.status(201).json(newProject)
  } catch (err) {
    next(err);
  }
});

async function validateProjectId(req, res, next) {
  try {
    const project = await projectsDb.getProjectById(req.params.id);
    req.project = project;
    if (!project) {
      return status(400).json({
        message: "Could not find that id ",
      });
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = router;
