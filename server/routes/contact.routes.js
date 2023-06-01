import express from "express";

import {
  createContact,
  getAllContacts,
  removeContact,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.route("/").get(getAllContacts);
router.route("/add").post(createContact);
router.route("/:id").delete(removeContact);

export default router;
