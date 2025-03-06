const express = require("express");
const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel } = require("../models/index");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");
const { tokenSign, tokenVerify } = require("../utils/handleJWT");

router.post("/register", validatorRegister, async (req, res) => {
  req = matchedData(req);
  const password = await encrypt(req.password);
  const body = { ...req, password };
  const dataUser = await usersModel.create(body);
  dataUser.set("password", undefined, { strict: false });
  const data = {
    token: await tokenSign(dataUser),
    user: dataUser,
  };
  res.send(data);
});

router.post("/login", validatorLogin, async (req, res) => {
  req = matchedData(req);
  const dataUser = await usersModel.findOne({ email: req.email });
  if (!dataUser) {
    res.status(401).send({ message: "Email not found" });
    return;
  }
  const comparePassword = await compare(req.password, dataUser.password);
  if (!comparePassword) {
    res.status(401).send({ message: "Password is incorrect" });
    return;
  }
  dataUser.set("password", undefined, { strict: false });
  const data = {
    token: await tokenSign(dataUser),
    user: dataUser,
  };
  res.send(data);
});

module.exports = router;
