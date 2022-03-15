import update from "../../../lib/services/user/updateInfo";
const crypto = require("crypto");
export default async (req, res) => {
  try {
    const { userName, password, confirmPass, email, id } = req.body;
    // userModel.findOne({ email }).then(async (user) => {
    //   if (user) {
    //     if (userName) {
    // userModel
    //   .findByIdAndUpdate(user._id, { userName })
    //   .then(async (result) => {
    //     if (result) {
    // await result.save();
    update(userName, password, confirmPass, email, id);
    res.status(200).json("userName updated");
    //   } else {
    console.log("API", id);
    //     res.status(404).json("");
    //   }
    // });
    // }
    //     if (email) {
    //       userModel
    //         .findByIdAndUpdate(user._id, { email })
    //         .then(async (result) => {
    //           if (result) {
    //             // await user.save();
    //             update(userName, password, confirmPass, email);
    //             res.status(200).json("email updated");
    //           } else {
    //             console.log("err");
    //             res.status(404).json("");
    //           }
    //         });
    //     }
    //     if (password && password === confirmPass) {
    //       const hashedPasswrod = crypto
    //         .Hash("sha256")
    //         .update(password)
    //         .digest("hex");
    //       userModel
    //         .findByIdAndUpdate(user._id, { hashedPasswrod })
    //         .then(async (result) => {
    //           if (result) {
    //             // await user.save();
    //             update(userName, password, confirmPass, email);
    //             res.status(200).json("password updated");
    //           } else {
    //             console.log("err");
    //             res.status(404).json("");
    //           }
    //         });
    //     }
    //   }
    // });
  } catch (err) {
    console.log(err);
  }
};
