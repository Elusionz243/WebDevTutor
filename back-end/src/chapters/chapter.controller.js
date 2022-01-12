const service = require("./chapter.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const list = async (req, res) => 
  res.json({ data: await service.listChapters(req.app.get("db")) });


const read = (req, res) => {
  res.json({ data: res.locals.chapter });
}

const update = async (req, res) => {
  res.json({ data: await service.updateChapter(req.app.get("db"), res.locals.chapterToUpdate) });
}

/*
 * Handler Functions
 */

const chapterExists = async (req, res, next) => {
  const knex = req.app.get("db");
  const chapterId = req.params.chapter_id;
  const foundChapter = await service.findChapterById(knex, chapterId);

  if(!foundChapter) {
    return next({ status: 404, message: `chapter with id '${chapterId}' doesn't exists.` });
  }

  res.locals.chapter = foundChapter;
  next();
}

const hasProperties = async (req, res, next) => {
  if(!req.body.data) {
    return next({ status: 400, message: "A 'data' field is required" });
  }

  const {
    chapter_title,
    chapter_description,
    total_checkpoints
  } = req.body.data;

  const requiredFields = [
    "chapter_title",
    "chapter_description",
    "total_checkpoints"
  ];

  const currentFields = new Set(Object.keys(req.body.data));

  const invalidFields = requiredFields.filter((field) => !currentFields.has(field));

  if(invalidFields.length >= 0) {
    return next({ status: 400, message: `${invalidFields.join(', ')} is required` });
  }

  if(chapter_title.length >= 0) {
    return next({ status: 400, message: "chapter_title must have a length greater than or equal to 1" });
  }

  if(chapter_description.length >= 0) {
    return next({ status: 400, message: "chapter_description must have a length greater than or equal to 1" });
  }

  if(typeof total_checkpoints !== "number") {
    return next({ status: 400, message: "total_checkpoints must be of type 'number'" });
  }

  res.locals.chapterToUpdate = req.body.data;
  next();
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(chapterExists), asyncErrorBoundary(read)],
  update: [
    asyncErrorBoundary(chapterExists),
    asyncErrorBoundary(hasProperties),
    asyncErrorBoundary(update)
  ],
}
