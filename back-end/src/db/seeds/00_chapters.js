const chapters = require("./00_chapters.json");

exports.seed = function(knex) {
  return knex.raw("TRUNCATE TABLE chapters RESTART IDENTITY CASCADE")
    .then(() => knex("chapters").insert(chapters));
};
