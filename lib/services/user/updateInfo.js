import userModel from "../../../lib/models/user/userModel";
const crypto = require("crypto");
async function update(name, password, confirmPass, email, id) {
  try {
    // const { userName, password, confirmPass, email } = req.body;
    console.log("user services", id);
    userModel.findById(id).then(async (user) => {
      if (user) {
        if (name) {
          userModel
            .findByIdAndUpdate(user._id, { name })
            .then(async (result) => {
              if (result) {
                console.log("NAE");
                // await result.save();
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
                // await user.save();
              } else {
                console.log("err");
              }
            });
        }
        if (password && password === confirmPass) {
          console.log('crpto');
          const hashedPasswrod = crypto
            .Hash("sha256")
            .update(password)
            .digest("hex");
          userModel
            .findByIdAndUpdate(user._id, { password:hashedPasswrod })
            .then(async (result) => {
              if (result) {
                console.log('done');
                // await user.save();
              } else {
                console.log("err");
              }
            });
        }await user.save();
      }
    });
  } catch (err) {
    console.log(err);
  }
}
export default update;
