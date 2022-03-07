import registerUser from "../../../lib/services/user/registerUser";
import Users from "../../../lib/models/user/userModel";
const crypto = require("crypto");
export default async function handler(req, res) {
  const { name, email, password } = req.body;
  if (req.method === "POST") {
    // Process a POST request
    if ((name, email, password)) {
      console.log(name, email, password);
      const hashedPasswrod = crypto
        .Hash("sha256", password)
        .digest("hex");
      const data = await Users.find({}).where("email").equals(email);
      console.log(data);
      const isData = data.length > 0;
      console.log(isData);
      if (!isData) {
        //register the user and redirect him to signin page
        console.log("registerd");
        registerUser(name, email, hashedPasswrod);
        res.writeHead(302, {
          Location: "/signin",
        });
        res.end();

      } else {
        //response by : this email is alrady used
        res.writeHead(302, {
          Location: "/signup?used",
        });
        res.end();
      }
    }
    //response you should fill the form
    console.log("POST");
  } else {
    // Handle any other HTTP method
    res.writeHead(302, {
      Location: "/signup",
    });
    res.end();
  }
}
