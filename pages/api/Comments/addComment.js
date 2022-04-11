import addComment from "../../../lib/services/comments/addComments";
export default async function (req, res) {
  try {
    console.log(req.body.meetingId);
    const { userId, meetingId, value } = req.body;
    if ((userId, meetingId, value)) {
      const result=await addComment(userId, meetingId, value);
      res.status(200).json();
    } else {
      res.status(404).json();
    }
  } catch (err) {
    console.log(err);
  }
}
