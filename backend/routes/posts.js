const express = require("express");

const PostContoller = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

// Post APIs with their respective middlewares
router.post("", checkAuth, extractFile, PostContoller.createPost);

router.put("/:id", checkAuth, extractFile, PostContoller.updatePost);

router.get("", PostContoller.getPosts);

router.get("/:id",PostContoller.getPost);

router.delete("/:id", checkAuth, PostContoller.deletePost);

module.exports = router;
