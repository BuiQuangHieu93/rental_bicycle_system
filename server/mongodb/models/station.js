import mongoose from "mongoose";

const StationSchema = new mongoose.Schema({
  station_name: { type: String, required: true },
  station_lat: { type: Number, required: true },
  station_lng: { type: Number, required: true },
  station_status: { type: Boolean, required: true },
  station_park: { type: Number, required: true },
});

const stationModel = mongoose.model("Station", StationSchema);

export default stationModel;
