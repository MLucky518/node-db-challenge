exports.up = async function (knex) {
  await knex.schema.createTable("resources", (tbl) => {
    tbl.increments("id");
    tbl.text("name").notNull().unique();
    tbl.text("description")
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("resources");
};
