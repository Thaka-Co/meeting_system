const roomModel = require("../../../lib/models/Rooms/roomsModel");
import addRoom from "../../../lib/services/rooms/addRooms";
export default async function postRoom (req, res)  {
  try {
    const { location, size, tools } = req.body;
    // const newRoom = new roomModel({
    //   location,
    //   size,
    //   tools,
    // });
    if ((location, size, tools)) {
      addRoom(location, size, tools);
    }else{
        res.json('there is something wrong !!')
    }
    // const result = await newRoom.save();
    // res.status(200).json(result);
  } catch (err) {
    res.status(404).json(err);
  }
};
// module.exports = {
//   addRoom,
// };
