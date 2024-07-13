const Router = require("express");
const router = new Router();
const JokesController = require("../controllers/jokesController");

router.get("/", JokesController.getRandomJokes);

module.exports = router;
