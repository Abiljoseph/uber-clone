import Driver from "../model/driver.model.js";
import bcrypt from "bcrypt";

export const DriverSignUp = async (req, res, next) => {
  const { name, email, phoneNo, password, location, photo, drivingLicense } =
    req.body;
  const preDriver = await Driver.findOne({ email });

  if (!name || !email || !phoneNo || !password || !photo || !drivingLicense) {
    return res.status(400).json("All inputs are required");
  }
  if (preDriver) {
    return res.status(500).json("Email already used");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newDriver = new Driver({
    name,
    email,
    phoneNo,
    password: hashedPassword,
    photo,
    location,
    drivingLicense,
  });
  try {
    await newDriver.save();
    res.status(200).json({ message: "driver created", newDriver });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const DriverSignIn = async () => {};
