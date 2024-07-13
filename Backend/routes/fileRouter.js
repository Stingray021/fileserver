const Router = require("express");
const router = new Router();
const fileController = require("../controllers/fileController");

router.get("/:name", fileController.getFile);
router.get("/", fileController.getFileList);

module.exports = router;
