exports.up = async function (knex) {
  await knex.schema.createTable("tasks", (tbl) => {
    tbl.increments("id");
    tbl.text("description").notNull();
    tbl.text("notes");
    tbl.boolean("isCompleted").notNull().defaultTo(false);
    tbl
      .integer("project_id")
      .notNull()
      .unsigned()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("tasks");
};
