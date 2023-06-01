import mongoose from "mongoose";

const RentBikeSchema = new mongoose.Schema({
  rentBike_account_id: { type: String, required: true },
  rentBike_bike_id: { type: String, required: true },
  rentBike_station_id: { type: String, required: true },
  rentBike_time: { type: Date, required: true },
});

const rentBikeModel = mongoose.model("RentBike", RentBikeSchema);

export default rentBikeModel;
