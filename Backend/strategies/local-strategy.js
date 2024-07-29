const passport = require("passport");
const { Strategy } = require("passport-local");
const userController = require("../controllers/userController");

passport.serializeUser((user, done) => {
  console.log("Inside Serialize User");
  console.log(user);
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  console.log("Inside Deserialize");
  console.log(`Deserializing user ID: ${id}`);
  try {
    const findUser = await userController.findOneById(id);
    done(null, findUser);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport.use(
  //{usernameField: ""} ,
  new Strategy(async (username, password, done) => {
    try {
      console.log(`Username: ` + username);
      console.log(`Password: ` + password);
      const findUser = await userController.check(username, password);
      done(null, findUser);
    } catch (err) {
      done(err, null);
    }
  })
);
