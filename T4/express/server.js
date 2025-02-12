const express = require("express");
const routerProgramacion = require("./routers/programacion");
const app = express();

//Loading process.env
require("dotenv").config();

//Routers
app.use("/programacion", routerProgramacion);

//listening
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 - Server Started!`);
  console.log(`🛠️  - Listening on port ${port}`);
});
