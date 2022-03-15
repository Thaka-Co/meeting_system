import userModel from "../../../lib/models/user/userModel";
const crypto = require("crypto");
async function update(userName, password, confirmPass, email, id) {
  try {
    // const { userName, password, confirmPass, email } = req.body;
    console.log("user services", id);
    userModel.findById(id).then(async (user) => {
      if (user) {
        if (userName) {
          userModel
            .findByIdAndUpdate(user._id, { userName })
            .then(async (result) => {
              if (result) {
                console.log("NAE");
                await result.save();
              } else {
                console.log("err");
              }
            });
        }
        if (email) {
          userModel
            .findByIdAndUpdate(user._id, { email })
            .then(async (result) => {
              if (result) {
                await user.save();
              } else {
                console.log("err");
              }
            });
        }
        if (password && password === confirmPass) {
          const hashedPasswrod = crypto
            .Hash("sha256")
            .update(password)
            .digest("hex");
          userModel
            .findByIdAndUpdate(user._id, { hashedPasswrod })
            .then(async (result) => {
              if (result) {
                await user.save();
              } else {
                console.log("err");
              }
            });
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
}
export default update;
