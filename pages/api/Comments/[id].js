import getComment from "../../../lib/services/comments/getComments";
// get meeting Comment
export default async function (req, res) {
  try {
    const { id } = req.query;
    if (id) {
      const result = await getComment(id);
      console.log(result ,'from back');
      if(!result)res.status(200).json('there is no comments');
      res.status(200).json(result);}
  } catch (err) {
    console.log(err);
  }
}
