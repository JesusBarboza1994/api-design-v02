const express = require("express");
const router = express.Router();

const controller = require("./controller");
const UserAuthorization = require("../../middleware/authentication");

router.get("/:id", UserAuthorization, controller.get_design);
router.post("/", UserAuthorization, controller.create_design);
router.patch("/:id", UserAuthorization, controller.update_design);

module.exports = router;