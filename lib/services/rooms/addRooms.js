// const roomModel = require("../../models/Rooms/roomsModel");
import roomModel from "../../models/Rooms/roomsModel";
async function addRoom (location, size, tools) {
  try {
    // const { location, size, tools } = req.body;
    const newRoom = new roomModel({
      location,
      size,
      tools,
    });
    console.log('llll');
    const result =  newRoom.save().then(()=>console.log('room added'));
    // res.status(200).json(result);
  } catch (err) {
    console.log(err);
    // res.status(404).json(err);
  }
};
export default addRoom;
