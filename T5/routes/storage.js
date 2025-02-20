const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");

router.post("/", uploadMiddleware.single("image"), (req, res) => {
  res.send("File uploaded");
});

module.exports = router;
