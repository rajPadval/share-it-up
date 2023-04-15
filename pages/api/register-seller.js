import connectDb from "@/database/conn";
import RegisterSeller from "@/database/models/RegisterSeller";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "share-it-up";

export default async function handler(req, res) {
  connectDb().catch((error) => console.log(error));
  const { fName, lName, email, phone, password ,college} = req.body;

  try {
    // Validate whether user exists in our database
    let user = await RegisterSeller.findOne({ email });

    if (user) {
      return res
        .status(409)
        .json({ error: "User Already Exist. Please Login" });
    }

    // Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    user = await RegisterSeller.create({
      fName,
      lName,
      college,
      email: email.toLowerCase(),
      phone,
      password: encryptedPassword,
    });

    // Getting id of each RegisterSellered user
    const data = {
      user: {
        id: user._id,
      },
    };

    // Signing secret
    const authToken = jwt.sign(data, JWT_SECRET);
    // Return new RegisterSellered user
    res.json({ user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
}
