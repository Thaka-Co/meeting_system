import roomModel from "../../../lib/models/Rooms/roomsModel";

export default async function getRoom(req, res) {
  try {
    // const { id } = req.body;
    console.log('here');
    const rooms = await roomModel.find({});
    if (rooms) {
      console.log('here');
      res.status(200).json(rooms);
    } else {
      res.status(404).json("room not found");
    }
  } catch (err) {
    res.status(404).json(err);
  }
}
