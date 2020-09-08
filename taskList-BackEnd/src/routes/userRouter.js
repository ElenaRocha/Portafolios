const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/create-user", userController.addUser);
router.post("/login", userController.userLogin);

module.exports = router;
