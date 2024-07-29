const Router = require("express");
const router = new Router();
const JokesController = require("../controllers/jokesController");
const userController = require("../controllers/userController");

router.get("/", userController.authStatus, JokesController.getRandomJokes);

module.exports = router;
