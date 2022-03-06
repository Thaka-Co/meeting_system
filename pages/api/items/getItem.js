import itemModel from "../../../lib/models/Items/itemsModel";

export default async function getItem(req, res) {
  try {
    // const { id } = req.body;
    console.log("here");
    const items = await itemModel.find({});
    if (items.length) {
      console.log("here");
      res.status(200).json(items);
    } else {
      res.status(404).json("items not found");
    }
  } catch (err) {
    res.status(404).json(err);
  }
}
