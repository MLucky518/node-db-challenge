exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "dumbbells", description: "a pair of 50's" },
        { name: "secretary", description: "karen" },
        { name: "noodles", description: "pasta hard until cooked" },
      ]);
    });
};
