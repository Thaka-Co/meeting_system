import meetingModel from "../../../lib/models/meetings/meetingsModel";
import getMeeting from "../../../lib/services/meeting/getMeeting";
// get meeting details
export default async (req, res) => {
  const { id } = req.query;
  if (id) {
    // console.log(id,'getMeeting');
    const result = await getMeeting(id);
    // console.log(result,'what going on');
    res.status(200).json(result);
  } else {
    res.text("there is something wrong !!");
  }
};
