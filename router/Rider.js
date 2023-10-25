import express from "express";
import { RiderSignUp } from "../controller/rider.controller.js";

const riderRouter = express.Router();

riderRouter.post("/sign_up", RiderSignUp);

export default riderRouter;
