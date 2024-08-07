require("dotenv").config();
const express = require("express");
const session = require("express-session")
const cors = require("cors");
const router = require("./routes/index");
const app = express();
const PORT = process.env.PORT;
const client = require("./db");
const passport = require("passport");
require("./strategies/local-strategy.js")

const corsOptions = {
  exposedHeaders: ['Set-Cookie'],
  credentials: true, 
  origin: true
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(session({
  secret: 'FD;X>~qkd5}K!yyJ)k@4Q4–c290I=–l;',
  resave: false,
  // cookie: {httpOnly: false}
}))
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", router);

const start = async () => {
  try {
    await client.connect();
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};
start();
