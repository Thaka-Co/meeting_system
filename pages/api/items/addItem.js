import addRoom from "../../../lib/services/items/addItem";
export default async function postItem(req, res) {
  try {
    const { title, description, userId, attachments, meetingId, isDelayed } =
      req.body;
    if ((title, description, userId, attachments, meetingId, isDelayed)) {
      addRoom(title, description, userId, attachments, meetingId, isDelayed);
    } else {
      res.json("there is something wrong !!");
    }
  } catch (err) {
    res.json(err);
  }
}
