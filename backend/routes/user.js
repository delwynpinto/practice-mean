const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();

// Sign up & Log in APIs
router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

module.exports = router;
