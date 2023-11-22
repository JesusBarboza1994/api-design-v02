const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.post("/", controller.create_customer)
router.patch("/:id", controller.update_customer)
router.delete("/:id", controller.delete_customer)