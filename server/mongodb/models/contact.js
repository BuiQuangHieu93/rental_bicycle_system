import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  contact_firstName: { type: String, required: true },
  contact_lastName: { type: String, required: true },
  contact_email: { type: String, required: true },
  contact_subscription: { type: String, required: true },
  contact_section: { type: String, required: true },
  contact_subSection: { type: String, required: true },
  contact_description: { type: String, required: true },
});

const contactModel = mongoose.model("Contact", ContactSchema);

export default contactModel;
