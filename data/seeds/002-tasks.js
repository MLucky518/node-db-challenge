exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "dumbell bench press",
          notes: "lift hard",
          isCompleted: false,
          project_id: 1,
        },
        {
          description: "fire karen",
          notes: "have her escorted out",
          isCompleted: true,
          project_id: 2,
        },
        {
          description: "boil water",
          notes: "set stove to high",
          isCompleted: false,
          project_id: 3,
        },
      ]);
    });
};
