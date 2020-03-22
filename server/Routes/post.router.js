const express = require("express");
const router = express.Router();
const postController = require("../Controller/post.controller");
const authController = require("../Controller/auth.controller");

router
  .route("/")
  .get(authController.protectedRoute, postController.getall)
  .post(authController.protectedRoute, postController.addpost);
router
  .route("/:id")
  .get(authController.protectedRoute, postController.getpost)
  .post(authController.protectedRoute, postController.addComment);
module.exports = router;
