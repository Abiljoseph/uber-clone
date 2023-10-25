import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    required: true,
  },
  drivingLicense: {
    type: String,
    required: true,
  },
});

const Driver = new mongoose.model("Driver", Schema);

export default Driver;
