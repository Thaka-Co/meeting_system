import roomModel from ("./../../models/Rooms/roomsModel");

const getRoom = async (req, res) => {
  try {
    const { id } = req.body;
    const room = await roomModel.findById(id);
    if (room) {
      res.status(200).json(room);
    } else {
      res.status(404).json("room not found");
    }
  } catch (err) {
    res.status(404).json(err);
  }
};
export default getRoom;
// module.exports = {
//   getRoom,
// };
