import addItem from "../../../lib/services/items/addItem";
import meetingsModel from "../../../lib/models/meetings/meetingsModel";
export default async function postItem(req, res) {
  try {
    const { title, description, meetingId, userId, attachments, selectedItem } =
      req.body;
    // console.log(title);
    if ((title, description)) {
      //or condition
      console.log("add item", title, description);
      addItem(title, description, meetingId);
    }
    if (selectedItem) {
      console.log("add delayed item", selectedItem, meetingId);
      addItem(selectedItem, meetingId);
    } else {
      res.json("there is something wrong !!");
    }
  } catch (err) {
    res.json(err);
  }
}
