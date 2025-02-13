const { tracksModel } = require("../models/index");

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find();
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching the tracks" });
  }
};

const createItem = async (req, res) => {
  try {
    const body = req.body;
    const data = await tracksModel.create(body);
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while creating the track" });
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = await tracksModel.findByIdAndUpdate(id, body, { new: true });
    if (!data) {
      return res.status(404).send({ error: "Track not found" });
    }
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while updating the track" });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await tracksModel.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).send({ error: "Track not found" });
    }
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while deleting the track" });
  }
};

module.exports = { getItems, createItem, updateItem, deleteItem };
