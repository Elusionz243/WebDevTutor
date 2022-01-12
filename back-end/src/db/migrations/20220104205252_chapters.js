exports.up = function(knex) {
  return knex.schema.createTable("chapters", (table) => {
    table.increments("chapter_id").primary();
    table.string("chapter_title").notNullable();
    table.string("chapter_description").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("chapters");
};
