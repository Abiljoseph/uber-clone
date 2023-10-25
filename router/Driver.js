import express from "express";
import { DriverSignIn, DriverSignUp } from "../controller/driver.controller.js";

const router = express.Router();

router.post("/sign_up", DriverSignUp);
router.post("/sign_in", DriverSignIn);

export default router;
