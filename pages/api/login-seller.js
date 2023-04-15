import connectDb from "@/database/conn";
import RegisterSeller from "@/database/models/RegisterSeller";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "share-it-up";

export default async function handler(req, res) {
  connectDb().catch((error) => console.log(error));
  const { email, password } = req.body;

  try {
    // Checking whether user exist in our database
    let user = await RegisterSeller.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ error: "Please try to login with correct credentials" });
    }

    // Comparing entered password and hashed password
    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res
        .status(400)
        .json({ error: "Please try to login with correct credentails" });
    }

    const data = {
      user: {
        id: user._id,
      },
    };

    // Signing secret
    const authToken = jwt.sign(data, JWT_SECRET);

    // Return a authentication token
    res.json({ authToken });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
}
