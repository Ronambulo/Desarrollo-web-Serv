const express = require("express");
const router = express.Router();
const { validatorCreateItem } = require("../validators/tracks");

const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks");

router.get("/", getItems);
router.post("/", validatorCreateItem, createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
