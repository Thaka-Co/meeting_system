const voteModel = require("./../../models/Votes/votesModel");

async function addVote(type, title, description, itemId) {
  try {
    // const { type, title, description, itemId } = req.body;
    const newVote = new voteModel({
      type,
      title,
      description,
      itemId,
    });
    const result = await newVote.save();
    // res.status(200).json(result);
  } catch (err) {
    console.log(err);
    // res.status(404).json(err);
  }
}
export default addVote;
