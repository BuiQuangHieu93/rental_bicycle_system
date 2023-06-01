import express from "express";

import { returnBikeAndCalculateFee } from "../controllers/returnBike.controller.js";

const router = express.Router();

router.route("/").post(returnBikeAndCalculateFee);

export default router;
