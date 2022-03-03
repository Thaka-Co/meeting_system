const voteModel = require("./../../models/Votes/votesModel");
import addVote from "../../../lib/services/votes/addVote";
export default async function postVote (req, res)  {
  try {
    const { type, title, description, itemId } = req.body;
    // const newVote = new voteModel({
    //   type,
    //   title,
    //   description,
    //   itemId,
    // });
    if ((type, title, description, itemId)) {
      addVote(type, title, description, itemId);
    }
    // const result = await newVote.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json(err);
  }
};
// module.exports = {
//     postVote,
// };
