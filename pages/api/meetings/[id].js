import meetingModel from "../../../lib/models/meetings/meetingsModel";
import getMeeting from "../../../lib/services/meeting/getMeeting";
// get meeting details
export default async (req, res) => {
  const { id } = req.query;
  if (id) {
    // console.log(getMeeting(id));
    const result = await getMeeting(id);
    res.status(200).json(result);
  } else {
    res.json("there is something wrong !!");
  }
};
