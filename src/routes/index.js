const express = require("express")
const router = express.Router();

const userRouter = require("../components/users/routes");
const designRouter = require("../components/designs/routes");
router.use("/users", userRouter);
router.use("/designs", designRouter);

module.exports = router;