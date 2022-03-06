import addAttachments from "../../../lib/services/attachments/addAttachments";
export default async function postAttach(req, res) {
  try {
    const { file,itemId,meetingId } =
      req.body;
      console.log(file);
    if ((file)) {
        console.log('attach');
        addAttachments(file,itemId,meetingId);
    } else {
      res.json("there is something wrong !!");
    }
  } catch (err) {
    res.json(err);
  }
}
