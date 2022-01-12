const listChapters = (knex) =>
  knex("chapters").select("*");

const findChapterById = (knex, chapter_id) => 
  knex("chapters").select("*").where({ chapter_id }).first();

const updateChapter = (knex, chapter) => 
  knex("chapters")
    .update(chapter)
    .where({ "chapter_id": chapter.chapter_id })
    .returning("*")
    .then(result => result[0]);

module.exports = {
  listChapters,
  findChapterById,
  updateChapter,
}
