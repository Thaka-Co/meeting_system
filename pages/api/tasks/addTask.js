import taskModel from "../../../lib/models/Tasks/taskModels";

export default async function postType(req, res) {
    try {
      const { title,cost,time,progress,comments } = req.body;
      const newTask = new taskModel({
        title,cost,time
      });
      if ( title,cost,time) {
        //   addRoom(location, size, tools);
        const result = await newTask.save();
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