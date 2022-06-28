import addVote from "../../../lib/services/votes/addVote";
export default async function postVote(req, res) {
  try {
    const { type, title, description, itemId, users } = req.body;
    // const newVote = new voteModel({
    //   type,
    //   title,
    //   description,
    //   itemId,
    // });
    console.log(itemId);
    if ((type, title, description, itemId, users)) {
      const result = await addVote(type, title, description, itemId, users);
      res.status(200).json(result);
    }
    // const result = await newVote.save();
  } catch (err) {
    res.status(404).json(err);
  }
}
// module.exports = {
//     postVote,
// };
