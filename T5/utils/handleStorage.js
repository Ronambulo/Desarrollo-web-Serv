const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("file", file);
    const pathStorage = __dirname + "/../storage";
    cb(null, pathStorage);
  },
  filename: function (req, file, cb) {
    const filename = file.originalname;
    cb(null, filename);
  },
});

const uploadMiddleware = multer({ storage });
const memory = multer.memoryStorage();
const uploadMiddlewareMemory = multer({ storage: memory });

module.exports = { uploadMiddleware, uploadMiddlewareMemory };
