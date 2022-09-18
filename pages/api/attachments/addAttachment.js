import addAttachments from "../../../lib/services/attachments/addAttachments";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function postAttach(req, res) {
  try {
    // const { file, itemId, meetingId } = req.body;
    console.log("file");
    const form = new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files) {
      console.log("hheeeree", files);
      await saveFile(files.file);
      //return res.status(201).send("");
    });
    //console.log(form);
    if (form) {
      console.log("attach");
      addAttachments(file, itemId, meetingId);
    } else {
      res.status(404).json("there is something wrong !!");
    }
  } catch (err) {
    res.json(err);
  }
}

// const post = async (req, res) => {
//   const form = new formidable.IncomingForm();
//   form.parse(req, async function (err, fields, files) {
//     await saveFile(files.file);
//     return res.status(201).send("");
//   });
// };

const saveFile = async (file) => {
  const data = fs.readFileSync(file.path);
  console.log("reaached");
  fs.writeFileSync(`./public/${file.name}`, data);
  await fs.unlinkSync(file.path);
  return;
};
