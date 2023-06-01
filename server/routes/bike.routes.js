import express from "express";

import {
  createBike,
  getAllBikes,
  removeBike,
  updateBike,
} from "../controllers/bike.controller.js";

const router = express.Router();

router.route("/add").post(createBike);
router.route("/").get(getAllBikes);
router.route("/:id").delete(removeBike);
router.route("/update").put(updateBike);

export default router;
