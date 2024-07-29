const Router = require("express");
const router = new Router();
const CatController = require("../controllers/catController");
const userController = require("../controllers/userController");

router.get("/", userController.authStatus, CatController.getRandomCat);

module.exports = router;
