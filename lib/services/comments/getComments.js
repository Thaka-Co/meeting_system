import commentModel from "../../models/Comments/commentsModel";
async function getComment(meetingId) {
  try {
    console.log(meetingId);
    const result = await commentModel.find({ meetingId }).populate("userId");
    return result;
  } catch (err) {
    console.log(err);
  }
}
export default getComment;
