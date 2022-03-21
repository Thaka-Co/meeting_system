import userModel from "../../../lib/models/user/userModel";
export default async (req, res) => {
  const { id } = req.query;
  console.log(id, "user model");
  const users = await userModel.find({});
  console.log(users);
  if (!users) return res.status(200).json("users not found");
  return res.status(200).json(users);
};
