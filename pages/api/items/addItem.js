import addItem from "../../../lib/services/items/addItem";
export default async function postItem(req, res) {
  try {
    const { title, description, userId, attachments, meetingId, isDelayed } =
      req.body;

    if ((title, description)) {
      console.log("add item", title, description);
      addItem(title, description);
    } else {
      res.json("there is something wrong !!");
    }
  } catch (err) {
    res.json(err);
  }
}
