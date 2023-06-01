import mongoose from "mongoose";

const ReturnBikeSchema = new mongoose.Schema({
  returnBike_account_id: { type: String, required: true },
  returnBike_bike_id: { type: String, required: true },
  returnBike_station_id: { type: String, required: true },
  returnBike_time: { type: Date, required: true },
});

const returnBikeModel = mongoose.model("ReturnBike", ReturnBikeSchema);

export default returnBikeModel;
