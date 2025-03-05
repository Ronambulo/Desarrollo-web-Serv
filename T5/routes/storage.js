const express = require("express");
const router = express.Router();
const {
  uploadMiddleware,
  uploadMiddlewareMemory,
} = require("../utils/handleStorage");
const { createItem, getItems, uploadImage } = require("../controllers/storage");

router.post("/local", uploadMiddleware.single("image"), createItem);
router.post("/", uploadMiddlewareMemory.single("image"), uploadImage);
router.get("/", getItems);

router.use((err, req, res, next) => {
  if (err) {
    res.status(413).json({ error: err.message });
  }
});
module.exports = router;
