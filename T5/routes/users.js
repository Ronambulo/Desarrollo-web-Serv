const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/session");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/users");

router.get("/", authMiddleware, getItems);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
