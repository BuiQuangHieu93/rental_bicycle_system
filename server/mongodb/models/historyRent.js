import mongoose from "mongoose";

const HistoryRentSchema = new mongoose.Schema({
  historyRent_account_id: { type: String, required: true },
  historyRent_bike_id: { type: String, required: true },
  historyRent_station_id: { type: String, required: true },
  historyRent_time: { type: Date, required: true },
  historyRent_fee: { type: Number, required: true },
});

const historyRentModel = mongoose.model("Account", HistoryRentSchema);

export default historyRentModel;
