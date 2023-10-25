import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router/Driver.js";
import riderRouter from "./router/Rider.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use("/driver", router);
app.use("/rider", riderRouter);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch(() => {
    console.log("database connection failed");
  });

app.listen(PORT, () => {
  console.log(`port is running on port ${PORT}`);
});
