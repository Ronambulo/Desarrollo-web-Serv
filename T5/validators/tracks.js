const { check } = require("express-validator");
const handleValidator = require("../utils/handleValidator");

const validatorCreateItem = [
  check("artist.name")
    .exists()
    .isLength({ min: 3, max: 99 })
    .withMessage("Name is required"),
  check("artist.nickname")
    .exists()
    .isLength({ min: 3, max: 99 })
    .withMessage("Nickname is required"),
  check("artist.edad").exists().isNumeric().withMessage("Edad is required"),
  check("album")
    .exists()
    .isLength({ min: 3, max: 99 })
    .withMessage("Album is required"),
  check("cover").exists().withMessage("Cover is required"),
  handleValidator,
];

module.exports = {
  validatorCreateItem,
};
