import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
  account_name: { type: String, required: true },
  account_password: { type: String, required: true },
  account_role: { type: String, required: true },
  account_unit: { type: Number, required: true },
  account_type: { type: String, required: true },
  account_validity: { type: Number, required: true },
  account_email: { type: String, required: true },
});

const accountModel = mongoose.model("Account", AccountSchema);

export default accountModel;
