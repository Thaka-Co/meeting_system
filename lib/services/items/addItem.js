import itemModel from "../../models/Items/itemsModel";
async function addItem() {
  try {
    const newItem = new itemModel({
      title,
      description,
      userId,
      attachments,
      meetingId,
      isDelayed,
    });
    console.log("items services");
    newItem.save().then(() => console.log("item added"));
  } catch (err) {
    console.log(err);
  }
}
export default addItem;
