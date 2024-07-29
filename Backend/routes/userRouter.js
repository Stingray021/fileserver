const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const passport = require("passport");

router.post("/auth", passport.authenticate("local"), (request, response) => {
  response.sendStatus(200);
});

router.post(
  "/registration",
  userController.registration,
  passport.authenticate("local"),
  (request, response) => {
    response.sendStatus(200);
  }
);

router.post("/password-change", userController.changePassword);

router.get("/check-auth", userController.getAuthStatus);

module.exports = router;
