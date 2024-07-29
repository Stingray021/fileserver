const Router = require("express");
const router = new Router();
const fileController = require("../controllers/fileController");
const userController = require("../controllers/userController");

router.get("/:name", userController.authStatus, fileController.getFile);
router.get("/", userController.authStatus, fileController.getFileList);

module.exports = router;
