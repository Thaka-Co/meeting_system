import itemModel from "../../../lib/models/Items/itemsModel";
export default async function (req, res) {
  try {
    await itemModel.deleteMany({
      meetingId: { $ne: "624622a6fed58ebcc69c7e21" },
    });
    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
