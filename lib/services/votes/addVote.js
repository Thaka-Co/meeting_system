import voteModel from "./../../models/Votes/votesModel";

async function addVote(type, title, description, itemId, users) {
  try {
    // const { type, title, description, itemId } = req.body;
    const newVote = new voteModel({
      type,
      title,
      description,
      itemId,
      // users,
    });
    const result = await newVote.save();
    // .then((data) => console.log("vote services"));
    console.log("vote added");
    console.log(result);
    // res.status(200).json(result);
  } catch (err) {
    console.log(err);
    // res.status(404).json(err);
  }
}
export default addVote;
