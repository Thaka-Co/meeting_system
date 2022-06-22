import addStatus from "../../../lib/services/status/addStatus";

export default async function postType(req, res) {
  try {
    const { value } = req.body;
    if (value) {
      //   addRoom(location, size, tools);
      const result = await addStatus(value);
      res.status(200).json(result);
    } else {
      res.json("there is something wrong !!");
    }
    // const result = await newRoom.save();
    // res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
}
