import express from "express";

import {
  createUser,
  getAllUsers,
  getUserInfoByID,
  login,
  deleteUser,
  createAdmin,
  updateUser,
  updateFee,
  updateSubscribe,
} from "../controllers/account.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/register").post(createUser);
router.route("/registerAdmin").post(createAdmin);
router.route("/login").post(login);
router.route("/:id").get(getUserInfoByID);
router.route("/:id").delete(deleteUser);
router.route("/update").put(updateUser);
router.route("/fee").put(updateFee);
router.route("/subscribe").put(updateSubscribe);

export default router;
