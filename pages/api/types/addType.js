import typeModel from "../../../lib/models/meetingTypes/types"
import addRoom from "../../../lib/services/rooms/addRooms";
export default async function postType(req, res) {
  try {
    const { type } = req.body;
    const newRoom = new typeModel({
      type,
    });
    if (type) {
      //   addRoom(location, size, tools);
      const result = await newRoom.save();
      res.status(200).json(result);
    } else {
      res.json("there is something wrong !!");
    }
    // const result = await newRoom.save();
    // res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
}
// module.exports = {
//   addRoom,
// };
//import for what have been exported;
