import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  rented: { type: Number, required: true },
  hour: { type: Number, required: true },
  humidity: { type: Number, required: true },
  windSpeed: { type: Number, required: true },
  temperature: { type: Number, required: true },
});

const Data = mongoose.model("Data", dataSchema);

export default Data;
