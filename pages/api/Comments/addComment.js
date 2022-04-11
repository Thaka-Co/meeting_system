import addComment from "../../../lib/services/comments/addComments";
export default async function (req, res) {
  const { userId, meetingId, value } = req.body;
  if ((userId, meetingId, value)) {
    addComment(userId, meetingId, value);
    res.status(200).json();
  } else {
    res.status(404).json();
  }
}
