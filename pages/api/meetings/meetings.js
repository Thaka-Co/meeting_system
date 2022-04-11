import meetingsModel from "../../../lib/models/meetings/meetingsModel";
import usersModel from "../../../lib/models/user/userModel";
export default async function handler(req, res) {
  // res.status(200).json({ data: req.body });
  console.log(req.method);
  console.log(req.body);
  // res.writeHead(301, {
  //   location: "/meetins",
  // });
  // if (req.method === "POST") {
  //create Meeting
  const meeting = await meetingsModel.create(req.body);
  if (meeting) {
    // user that make the meeting
    const user = await usersModel.findById(req.body.id);
    await user.meetings.push(meeting._id);
    await user.save();
    meetingsModel
      .findById(meeting._id)
      .populate("memebers")
      .then(async (result) => {
        if (result) {
          for (let user of result.memebers) {
            await user.meetings.push(result._id);
            await user.save();
          }
        }
      })
      .catch((err) => res.status(200).json(err));
    // }
    // console.log(req.body);
    return res.status(200).json(meeting);
  }
  // if (req.method === 'PUT') {
  //     //update meeting
  // }

  // if (req.method === 'GET') {
  //     //getmeetins

  // }
  // if (req.method === 'DELETE') {
  //     // Delete Meeting
  // }
}
