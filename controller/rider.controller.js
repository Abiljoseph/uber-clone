import Rider from "../model/rider.model.js";
import bcrypt from "bcrypt";

export const RiderSignUp = async (req, res, next) => {
  const { name, email, phoneNo, password } = req.body;
  const preDriver = await Rider.findOne({ email });

  if (!name || !email || !phoneNo || !password) {
    return res.status(400).json("All inputs are required");
  }
  if (preDriver) {
    return res.status(500).json("Email already used");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newRider = new Rider({
    name,
    email,
    phoneNo,
    password: hashedPassword,
  });
  try {
    await newRider.save();
    res.status(200).json({ message: "driver created", newRider });
  } catch (error) {
    res.status(500).json(error);
  }
};
