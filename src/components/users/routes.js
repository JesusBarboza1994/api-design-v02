const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.post("/login", controller.login)
router.post("/signup", controller.create_user)
router.post("/signup-admin", controller.create_user_admin)

module.exports = router