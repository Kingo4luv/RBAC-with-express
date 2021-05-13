const express = require("express");
const router = express.Router();
const BookController = require('../controllers/bookController');
const PostController = require('../controllers/PostController');
const UserController = require('../controllers/userController');
const { auth } = require("../middelware/auth");
const { permitted } = require("../middelware/permitted");

// const canReadPost = permitted("Book", "read");

router.get("/books", auth, permitted("Book", "read"), BookController.allBooks);
router.post("/books", auth, permitted("Book", "write"), BookController.addBook);
router.get("/books/:id", auth, permitted("Book", "read"), BookController.getBook);
router.patch("/books/:id", auth, permitted("Book", "update"), BookController.updateBook);
router.delete("/books/:id", auth, permitted("Book", "delete"), BookController.deleteBook);

router.get("/posts", auth, permitted("Post", "read"), PostController.allPosts);
router.post("/posts", auth, permitted("Post", "write"), PostController.addPost);
router.get("/posts/:id", auth, permitted("Post", "read"), PostController.updatePost);
router.patch("/posts/:id", auth, permitted("Post", "update"), PostController.updatePost);
router.delete("/posts/:id", auth, permitted("Post", "delete"), PostController.deletePost);

router.post("/users/register", UserController.signup);
router.post("/users/login", UserController.login);
router.post("/users/logout", UserController.logout);


module.exports = router;