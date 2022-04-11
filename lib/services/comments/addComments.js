import commentModel from "../../models/Comments/commentsModel";
async function addComment(userId, meetingId, value) {
  try {
    const newComment = new commentModel({
      userId,
      meetingId,
      value,
    });
    commentModel
      .create(newComment)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
}
export default addComment;
