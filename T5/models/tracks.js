const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const tracksSchema = new mongoose.Schema(
  {
    artist: {
      name: { type: String },
      nickname: { type: String },
      edad: { type: Number },
    },
    album: { type: String },
    cover: { type: String },
    mediaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "storages",
    },
  },
  {
    timeStamps: true,
    versionKey: false,
  }
);

tracksSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("tracks", tracksSchema);
