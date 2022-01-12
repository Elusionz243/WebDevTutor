const router = require("express").Router();

const controller = require("./checkpoint.controller");

const methodNotAllowed = require("../errors/methodNotAllowed")

router
  .route("/")
  .get(controller.list)
  .all(methodNotAllowed);

router
  .route("/:checkpoint_id")
  .get(controller.read)
  .all(methodNotAllowed);

module.exports = router;
