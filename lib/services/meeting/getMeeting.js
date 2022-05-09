// const meetingModel = require("./../../models/meetings/meetingsModel");
import meetingModel from './../../models/meetings/meetingsModel'
console.log(meetingModel);
const getMeeting = async (id) => {
  try {
    // const { id } = req.body;

    console.log(id, "meeting api hiii");
    const meeting = await meetingModel.findById(id).populate("memebers");
    console.log(meeting);
    if (!meeting) return "meeting not found";
    return meeting;

    // const meeting = await meetingModel.findById(id);
    // if (meeting) {
    //   res.status(200).json(room);
    // } else {
    //   res.status(404).json("meeting not found");
    // }
  } catch (err) {
    console.log('from catch',err);
  }
};
export default getMeeting;
