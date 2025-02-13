const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    artist: {
      name: { type: String },
      nickname: { type: String },
      edad: { type: Number },
    },
    album: { type: String },
    cover: { type: String },
  },
  {
    timeStamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("tracks", UserSchema);
