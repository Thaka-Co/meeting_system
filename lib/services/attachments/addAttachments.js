// const roomModel = require("../../models/Rooms/roomsModel");
import attachmentModel from "../../models/Attachments/attachmentsModel";
async function addAttach(file,itemId,meetingId) {
  try {
    // const { location, size, tools } = req.body;
    const newAttach = new attachmentModel({
        file,itemId,meetingId
    });
    console.log("attach services");
    newAttach.save().then(() => console.log("attach added"));
    // res.status(200).json(result);
  } catch (err) {
    console.log(err);
    // res.status(404).json(err);
  }
}
export default addAttach;
