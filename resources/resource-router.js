const express = require("express");
const resourceDb = require("./resource-model");
const router = express.Router();



router.get("/:id/resources", async (req, res, next) => {
  try {
    const resource = await resourceDb.getResources(req.params.id);
    res.status(200).json(resource);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/resources", async (req, res, next) => {
  try {
    const data = req.body;
    const newResource = await resourceDb.addResource(data, req.params.id);
    res.status(201).json(newResource);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
