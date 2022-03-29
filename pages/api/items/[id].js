import itemModel from "../../../lib/models/Items/itemsModel";

export default async function getItem(req, res) {
  try {
    const { id } = req.query;
    console.log("here", id);
    const items = await itemModel.find({ meetingId: id })//.populate("votes");
    if (items.length) {
      console.log("here");
      res.status(200).json(items);
    } else {
      res.status(200).json("items not found !!!!");
    }
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
}
