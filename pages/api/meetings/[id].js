import meetingModel from "../../../lib/models/meetings/meetingsModel";
import getMeeting from "../../../lib/services/meeting/getMeeting";
// get meeting details
export default async (req, res) => {
  const { id } = req.query;
  if (id) {
    const result = await getMeeting(id);
    console.log(result);
    res.status(200).json(result);
  } else {
    res.json("there is something wrong !!");
  }
};
