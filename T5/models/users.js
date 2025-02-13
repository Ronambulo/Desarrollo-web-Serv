const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String, unique: true },
    password: { type: String }, //TODO guardar la contraseña encriptada
    role: {
      type: ["admin", "user"], // Enumerado
      default: "user",
    },
  },
  {
    timeStamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("users", UserSchema);
