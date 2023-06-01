import mongoose from "mongoose";

const DamageSchema = new mongoose.Schema({
  damage_description: { type: String, required: true },
  damage_status: { type: String, required: true },
  damage_lat: { type: Number, required: true },
  damage_lng: { type: Number, required: true },
  damage_time: { type: Date, required: true },
});

const damageModel = mongoose.model("Account", DamageSchema);

export default damageModel;
