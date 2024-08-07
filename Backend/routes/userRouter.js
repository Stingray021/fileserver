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

router.post("/logout", function(req, res, next){
  req.logout(function(err) {
    if (err) { return res.json({err}); }
  });
  return res.json({logout: true})
})

router.post("/password-change", userController.changePassword);

router.get("/check-auth", userController.getAuthStatus);

module.exports = router;
