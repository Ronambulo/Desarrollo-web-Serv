const { storageModel } = require("../models/index");
const uploadToPinata = require("../utils/handleUploadIPFS");

const createItem = async (req, res) => {
  const { body, file } = req;
  const fileData = {
    filename: file.filename,
    url: process.env.PUBLIC_URL + "/" + file.filename,
  };
  const data = await storageModel.create(fileData);
  res.json(data);
};

const getItems = async (req, res) => {
  const data = await storageModel.find();
  res.json(data);
};

const uploadImage = async (req, res) => {
  try {
    const fileBuffer = req.file.buffer;
    const fileName = req.file.originalname;
    const pinataResponse = await uploadToPinata(fileBuffer, fileName);
    //console.log("response:     " + pinataResponse);
    const ipfsFile = pinataResponse.IpfsHash;
    const ipfs = `https://${process.env.PINATA_GATEWAY_URL}/ipfs/${ipfsFile}`;
    const data = await storageModel.create({ filename: fileName, url: ipfs });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("ERROR_UPLOAD_IMAGE");
  }
};

module.exports = {
  createItem,
  getItems,
  uploadImage,
};
