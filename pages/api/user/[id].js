import userModel from "../../../lib/models/user/userModel";
export default async (req, res) => {
  const { id } = req.query;
  console.log(id, "user model");
  const user = await userModel.findById(id).populate("meetings")//.populate('memebers');
  console.log(user);
  if (!user) return res.status(200).json("user not found");
  return res.status(200).json(user);
};
