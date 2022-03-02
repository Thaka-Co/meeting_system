const meetingModel = require("./../../models/meetings/meetingsModel");

const getMeeting = async (req, res) => {
  try {
    const { id } = req.body;
    const meeting = await meetingModel.findById(id);
    if (meeting) {
      res.status(200).json(room);
    } else {
      res.status(404).json("meeting not found");
    }
  } catch (err) {
    res.status(404).json(err);
  }
};
module.exports = {
  getMeeting,
};
