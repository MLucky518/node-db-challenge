const db = require("../data/config");

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects").where("id", id).first();
}

function addProject(project) {
  const { name, description, isCompleted } = project;
  return db("projects")
    .insert({name,description,isCompleted})
    .then((res) => {
      return getProjectById(res[0]);
    });
}

module.exports = {
  getProjects,
  getProjectById,
  addProject,
};
