const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const taskRouter = require("./routes/taskRouter.js");
const userRouter = require("./routes/userRouter.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const appPort = 3000;
const secret = "P1xeSMieVkNDs0eQNlIM";

function authenticate(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.status(401).json({
      message: "Debes incluir un token válido en tu petición.",
    });
    return;
  }
  const decodedToken = jwt.verify(token, secret);
  req.username = decodedToken.username;

  next();
}

app.use("/registro", userRouter);
app.use("/", authenticate, taskRouter);

app.listen(appPort, () => console.log("Running on ", appPort));
