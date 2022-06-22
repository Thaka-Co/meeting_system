import itemModel from "../../models/Items/itemsModel";
async function addItem(
  title,
  description,
  meetingId,
  userId,
  attachments,
  isDelayed,
  selectedItem
) {
  try {
    console.log(title);
    if (!Array.isArray(title)) {
      const newItem = new itemModel({
        title,
        description,
        meetingId,
        userId,
        attachments,
        isDelayed,
        status: "62b348d49a8fedf769bb3f40",
      });
      console.log("items services");
      newItem.save().then(() => console.log("item added"));
    }
    // meetingsModel.findById(meetingId).populate('memebers').then(async(result)=>{
    if (Array.isArray(title)) {
      for (let item of title) {
        const itemData = await itemModel.findById(item); //item.meetingId=meetingId;
        itemData.meetingId = description;
        itemData.isDelayed = false;
        // await itemModel.findByIdAndUpdate(itemData._id,{})
        await itemData.save();
      }
    }
    // }).catch((err)=>res.status(200).json(err))
  } catch (err) {
    console.log(err);
  }
}
export default addItem;
