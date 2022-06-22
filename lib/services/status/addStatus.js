// const roomModel = require("../../models/Rooms/roomsModel");
import statusModel from "../../models/Status/statusModel";
async function addStatus(value) {
  try {
    // const { location, size, tools } = req.body;
    console.log(value);
    const newStatus = new statusModel({ value });
    console.log("status services");
    newStatus.save().then(() => console.log("status added"));
    // res.status(200).json(result);
  } catch (err) {
    console.log(err);
    // res.status(404).json(err);
  }
}
export default addStatus;
