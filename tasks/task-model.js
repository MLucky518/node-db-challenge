const db = require("../data/config");

function get() {
  return db("tasks");
}

function getTasks(id) {
  return db("projects as p")
    .join("tasks as t", "p.id", "t.project_id")
    .select([
      "p.name",
      "p.description",
      "t.id as task_id",
      "t.description",
      "t.notes",
      "t.isCompleted",
      "t.project_id",
    ])
    .where("t.project_id", id);
}

function addTask(task, id) {
  const { description, notes, isCompleted } = task;
  return db("tasks")
    .insert({ description, notes, isCompleted, project_id: id })
    .where("id", id)
    .then((res) => {
      return getTasks(res[0]);
    });
}

module.exports = {
  get,
  getTasks,
  addTask,
};
