import typeModel from "../../../lib/models/meetingTypes/types";

export default async function getTypes(req, res) {
  try {
    // const { id } = req.body;
    const rooms = await typeModel.find({});
    if (rooms.length) {
      console.log("here", rooms);
      res.status(200).json(rooms);
    } else {
      res.status(404).json("rooms not found");
    }
  } catch (err) {
    console.log(err);
    res.status(200).json(err);
  }
}
