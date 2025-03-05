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

module.exports = router;
