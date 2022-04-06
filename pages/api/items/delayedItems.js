import itemModel from "../../../lib/models/Items/itemsModel";

export default async function getDelayedItems(req, res) {
  try {
    // const { id } = req.body;
    console.log("here");
    const items = await itemModel.find({ isDelayed: true });
    if (items.length) {
      console.log("here", items);
      res.status(200).json(items);
    } else {
      res.status(404).json("delayedItems not found");
    }
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
}
