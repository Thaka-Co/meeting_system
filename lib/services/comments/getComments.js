import commentModel from "../../models/Comments/commentsModel";
async function getComment(meetingId) {
  commentModel
    .find({ meetingId })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
}
export default getComment;
