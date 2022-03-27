import itemModel from "../../../../lib/models/Items/itemsModel";

export default async function postItem(req, res) {
  try {
    const { id } = req.query;
    const item = await itemModel.findByIdAndUpdate(id, { isDelayed: true });
    if (item) {
      console.log("here");
      res.status(200).json(item);
    } else {
      res.status(200).json("item not found !!!!");
    }
  } catch (err) {
    console.log("lllooolll");
    console.log(err);
    res.status(404).json(err);
  }
}
