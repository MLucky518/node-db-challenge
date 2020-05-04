const db = require("../data/config");

function get() {
  return db("resources");
}
function getResources(id) {
  return db("projects as p")
    .join("resources as r", "p.id", "r.id")
    .join("project_resources as pr", "p.id", "pr.project_id")
    .select(["r.name", "r.description", "pr.project_id"])
    .where("pr.project_id", id);
}

function getById(resource_id) {
    return db("resources as r").where({ "r.id": resource_id }).first();
  }

function addResource(resource, id) {
  const { name, description } = resource;
  return db("resources as r")
    .insert({ name, description })
    .where("r.id", id)
    .then((res) => {
      return getResources(res[0]);
    });
}

module.exports = { get,getById, getResources, addResource };
