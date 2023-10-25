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
});

const Rider = new mongoose.model("Rider", Schema);

export default Rider;
