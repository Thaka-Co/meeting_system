const roomModel = require("../../lib/models/Rooms/roomsModel");

export default async function getRoom(req, res) {
  try {
    const { id } = req.body;
    const rooms = await roomModel.find({});
    if (rooms) {
      res.status(200).json(rooms);
    } else {
      res.status(404).json("room not found");
    }
  } catch (err) {
    res.status(404).json(err);
  }
}
