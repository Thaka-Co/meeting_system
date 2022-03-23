import meetingModel from "../../../lib/models/meetings/meetingsModel";
export default async (req, res) => {
  const { id } = req.query;
  console.log(id, "meeting api");
  const meeting = await meetingModel.findById(id).populate('memebers');
  console.log(meeting);
  if (!meeting) return res.status(200).json("meeting not found");
  return res.status(200).json(meeting);
};
