const router = require("express").Router();

const controller = require("./chapter.controller");

const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(controller.list)
  .all(methodNotAllowed);

router
  .route("/:chapter_id")
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed);

module.exports = router;
