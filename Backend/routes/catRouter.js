const Router = require("express");
const router = new Router();
const CatController = require("../controllers/catController");

router.get("/", CatController.getRandomCat);

module.exports = router;
