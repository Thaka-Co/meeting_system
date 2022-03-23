import addItem from "../../../lib/services/items/addItem";
export default async function postItem(req, res) {
  try {
    const { title, description,meetingId, userId, attachments, isDelayed } =
      req.body;

    if ((title, description,meetingId)) {
      console.log("add item", title, description);
      addItem(title, description,meetingId);
    } else {
      res.json("there is something wrong !!");
    }
  } catch (err) {
    res.json(err);
  }
}
