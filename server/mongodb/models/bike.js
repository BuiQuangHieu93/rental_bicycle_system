import mongoose from "mongoose";

const BikeSchema = new mongoose.Schema({
  bike_station: { type: String, required: true },
  bike_code: { type: String, required: true },
  bike_status: { type: Boolean, required: true },
  bike_date_add: { type: Date, required: true },
});

const bikeModel = mongoose.model("Bike", BikeSchema);

export default bikeModel;
