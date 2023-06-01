import express from "express";
import { createRentBike } from "../controllers/rentBike.controller.js";

const router = express.Router();

router.route("/").post(createRentBike);

export default router;
