const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");

var authRouter = require("./routes/auth");
var SignupRouter = require("./routes/usersignup");
// Post = require("./models/model.post");
const apiRouter = require("./routes/api.router");
city1 = require("./models/sample");
console.log(city1);
//cors
app.use(cors());

//bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
//Db Connection
const db = require("./config/db.config");
db.authenticate()
  .then(() => {
    console.log(" Db connected Successfully!");
  })
  .catch(err => {
    console.log(err);
  });
//Routes
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api", apiRouter);
app.use("/auth", authRouter);
app.use("/userSignup", SignupRouter);

//Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Runnning on ${port}`);
});
