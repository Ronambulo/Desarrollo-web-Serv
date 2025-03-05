const { check } = require("express-validator");
const handleValidator = require("../utils/handleValidator");
const { validatorCreateItem } = require("./tracks");

validatorRegister = [
  check("name")
    .exists()
    .isLength({ min: 3, max: 99 })
    .withMessage("Name is required"),
  check("age").exists().isNumeric().withMessage("Age is required"),
  check("email").exists().isEmail().withMessage("Email is required"),
  check("password")
    .exists()
    .isLength({ min: 8, max: 16 })
    .withMessage("Password is required"),

  (req, res, next) => {
    return handleValidator(req, res, next);
  },
];

const validatorLogin = [
  check("email").exists().isEmail().withMessage("Email is required"),
  check("password")
    .exists()
    .isLength({ min: 8, max: 16 })
    .withMessage("Password is required"),
  (req, res, next) => {
    return handleValidator(req, res, next);
  },
];

module.exports = { validatorRegister, validatorLogin };
