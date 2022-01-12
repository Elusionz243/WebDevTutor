
exports.up = function(knex) {
  return knex.schema.createTable("checkpoints", (table) => {
    table.increments("checkpoint_id").primary();
    table.string("checkpoint_title").notNullable();
    table.string("checkpoint_description").notNullable();
    table.string("checkpoint_link").notNullable();
    table
      .foreign("chapter_id")
      .references("chapter_id")
      .inTable("chapters");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("checkpoints");
};
