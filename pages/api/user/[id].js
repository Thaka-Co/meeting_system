import userModel from "../../../lib/models/user/userModel";
export default async (req, res) => {
  const { id } = req.query;
  console.log(id, "user model");
  const user = await userModel.findById(id);
  console.log("this is my plant ", user);
  if (!user) return res.status(200).json("not found");
  return res.status(200).json(user);
};
