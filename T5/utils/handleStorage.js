const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("file", file);
    const pathStorage = __dirname + "/../storage";
    cb(null, pathStorage);
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + "-" + file.originalname;
    cb(null, filename);
  },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
