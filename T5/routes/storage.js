const express = require("express");
const router = express.Router();
const {
  uploadMiddleware,
  uploadMiddlewareMemory,
} = require("../utils/handleStorage");
const { createItem, getItems, uploadImage } = require("../controllers/storage");

router.post("/", uploadMiddlewareMemory.single("image"), uploadImage);
router.post("/local", uploadMiddleware.single("image"), createItem);
router.get("/", getItems);

module.exports = router;
