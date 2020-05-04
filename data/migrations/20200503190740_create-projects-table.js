exports.up = async function (knex) {
  await knex.schema.createTable("projects", (tbl) => {
    tbl.increments("id");
    tbl.text("name").notNull();
    tbl.text("description");
    tbl.boolean("isCompleted").notNull().defaultTo(false);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("projects");
};
