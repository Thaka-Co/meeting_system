import main from "../../db/connection";
import Users from "../../models/user/userModel";

async function registerUser(name, email, password) {
  try {
    const registerUser = new Users({
      name: name,
      email: email,
      password: password,
      phone: "",
      profilepic: "",
      task: [],
      meetings: [],
    });
    console.log(registerUser);
    registerUser.save().then(() => console.log("User Registered"));
  } catch (err) {
    return err;
  }
}
export default registerUser;
