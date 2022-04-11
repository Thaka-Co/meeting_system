import itemModel from "../../../../lib/models/Items/itemsModel";

export default async function postItem(req, res) {
  try {
    const { id } = req.query;
    const item = await itemModel.findById(id);
    if (item) {
      if (item.isDelayed) {
        await itemModel.findByIdAndUpdate(id, { isDelayed: false });
      }
      if (!item.isDelayed) {
        await itemModel.findByIdAndUpdate(id, { isDelayed: true });
      }
      res.status(200).json(item);
    } else {
      res.status(200).json("item not found !!!!");
    }
  } catch (err) {
    res.status(404).json(err);
  }
}
