import itemModel from "../../models/Items/itemsModel";
async function addItem(
  title,
  description,
  meetingId,
  userId,
  attachments,
  isDelayed
) {
  try {
    const newItem = new itemModel({
      title,
      description,
      meetingId,
      userId,
      attachments,
      isDelayed,
    });
    console.log("items services");
    newItem.save().then(() => console.log("item added"));
  } catch (err) {
    console.log(err);
  }
}
export default addItem;
