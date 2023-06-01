import express from "express";

import {
  createStation,
  removeStation,
  getAllStations,
  getStationInfoByID,
  getBikeByStationID,
  updateStation,
} from "../controllers/station.controller.js";

const router = express.Router();

router.route("/").get(getAllStations);
router.route("/add").post(createStation);
router.route("/:id").get(getStationInfoByID);
router.route("/station/:id").get(getBikeByStationID);
router.route("/:id").delete(removeStation);
router.route("/update").put(updateStation);

export default router;
