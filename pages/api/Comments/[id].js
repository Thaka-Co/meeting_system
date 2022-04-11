import getComment from "../../../lib/services/comments/getComments";
// get meeting Comment
export default async function (req, res) {
  try {
    const { id } = req.query;
    if (id) {
      const result = await getComment(id);
      res.status(200).json(result);
    } else {
      res.status(404).json();
    }
  } catch (err) {
    console.log(err);
  }
}
