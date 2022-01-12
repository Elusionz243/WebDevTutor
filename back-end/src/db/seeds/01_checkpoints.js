const checkpoints = require("./01_checkpoints.json");

exports.seed = function(knex) {
  return knex.raw("TRUNCATE TABLE checkpoints RESTART IDENTITY CASCADE")
    .then(() => knex("checkpoints").insert(checkpoints));
};
