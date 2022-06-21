import voteModel from "./../../models/Votes/votesModel";

async function getItemVotes(itemId) {
  try {
    console.log(itemId, "itemId");
    const result = await voteModel.find({ itemId });
    return result;
  } catch (err) {
    return err;
  }
}
export default getItemVotes;
