const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./config/mongo");
const routes = require("./routes/index");
const morganBody = require("morgan-body");
const loggerStream = require("./utils/handleLogger");

// Create express instance
const app = express();

morganBody(app, {
  noColors: true,
  skip: function (req, res) {
    return res.statusCode < 400;
  },
  stream: loggerStream,
});

//configure app
app.use(cors());
app.use(express.json());

// Define the routes
app.use("/", routes);
app.use(express.static("storage"));

// Define the port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.clear();
  console.log(`🚀 - Server Started!`);
  console.log(`🛠️  - Listening on port ${port}`);
  dbConnect();
});
