import express from "express";
import { predictData } from "../controllers/data.controller.js";

const router = express.Router();

router.post("/predict", predictData);

export default router;
