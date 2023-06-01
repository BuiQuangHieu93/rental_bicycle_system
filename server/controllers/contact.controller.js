import Contact from "../mongodb/models/contact.js";
import Account from "../mongodb/models/account.js";

const createContact = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      subscription,
      section,
      subSection,
      description,
    } = req.body;

    const emailExist = await Account.findOne({ account_email: email });

    if (emailExist) {
      const newContact = await Contact.create({
        contact_firstName: firstName,
        contact_lastName: lastName,
        contact_email: email,
        contact_subscription: subscription,
        contact_section: section,
        contact_subSection: subSection,
        contact_description: description,
      });
      res
        .status(201)
        .send({ msg: "Successfully added contact...!", newContact });
    } else {
      res.status(400).send({ msg: "Contact not create...!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contact = await Contact.find({});
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findOne({ _id: id });
    if (contact) {
      await Contact.deleteOne({ _id: id });
      res.status(200).send({ message: "Contact deleted" });
    } else {
      res.status(404).send({ message: "Contact not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

export { createContact, getAllContacts, removeContact };
