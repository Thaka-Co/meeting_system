const meetingModel = require("./../../models/meetings/meetingsModel");

const getMeeting = async (id) => {
  try {
    // const { id } = req.body;

    console.log(id, "meeting api");
    const meeting = await meetingModel.findById(id).populate("memebers");
    // console.log(meeting);
    if (!meeting) return "meeting not found";
    return meeting;

    // const meeting = await meetingModel.findById(id);
    // if (meeting) {
    //   res.status(200).json(room);
    // } else {
    //   res.status(404).json("meeting not found");
    // }
  } catch (err) {
    console.log(err);
  }
};
export default getMeeting;
