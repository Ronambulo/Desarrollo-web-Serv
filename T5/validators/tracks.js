const { check } = require("express-validator");
const handleValidator = require("../utils/handleValidator");

const validatorCreateItem = [
  check("artist.name").exists().withMessage("Name is required"),
  check("artist.nickname").exists().withMessage("Nickname is required"),
  check("artist.edad").exists().withMessage("Edad is required"),
  check("album").exists().withMessage("Album is required"),
  check("cover").exists().withMessage("Cover is required"),
  handleValidator,
];

module.exports = {
  validatorCreateItem,
};
