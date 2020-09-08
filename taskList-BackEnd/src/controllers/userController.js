const userModel = require("../models/userModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = "P1xeSMieVkNDs0eQNlIM";

module.exports = {
  addUser: async function (req, res) {
    const postData = await userModel.addUser(req.body);
    res.send("Usuario creado");
  },
  userLogin: async function (req, res) {
    try {
      const { username, password } = req.body;
      const userData = await userModel.checkUser(username);
      if (!userData) {
        res.status(401).json({
          message: "Usuario o contraseña incorrectos",
        });
        return;
      }

      const passwordIsCorrect = await bcrypt.compare(
        password,
        userData[0].password
      );
      if (!passwordIsCorrect) {
        res.status(401).json({
          message: "Usuario o contraseña incorrectos",
        });
        return;
      }
      const token = jwt.sign({ username }, secret, { expiresIn: "1d" });
      res.status(200).json({
        message: "Login correcto",
        token,
        username,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Se ha producido un error");
    }
  },
};
