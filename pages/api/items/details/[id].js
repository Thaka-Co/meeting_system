import itemModel from "../../../../lib/models/Items/itemsModel";
// get item by id
export default async function getItem(req, res) {
  try {
    const { id } = req.query;
    console.log("here", id);
    const item = await itemModel.findById(id).populate("votes");
    if (item) {
      console.log("here");
      res.status(200).json(item);
    } else {
      res.status(200).json("item not found !!!!");
    }
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
}
