import getItemVotes from "../../../lib/services/votes/getItemVotes";
// get meeting details
export default async (req, res) => {
  try {
    const { itemId } = req.query;
    console.log(itemId);
    if (itemId) {
      const result = await getItemVotes(itemId);
      res.status(200).json(result);
    }
    res.status(200).json("item id not found");
  } catch (err) {
    return err;
  }
};
