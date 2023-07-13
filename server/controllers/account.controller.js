import Account from "../mongodb/models/account.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import otpGenerator from "otp-generator";

const getAllUsers = async (req, res) => {
  try {
    const users = await Account.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    const userExists = await Account.findOne({ account_name: name });

    if (userExists)
      return res.status(200).json({ message: "User already register" });

    if (password) {
      bcrypt
        .hash(password, 10)
        .then(async (hashedPassword) => {
          const newUser = await Account.create({
            account_name: name,
            account_password: hashedPassword,
            account_role: "user",
            account_unit: 0,
            account_type: "V-LIBRE",
            account_validity: 365,
            account_email: email,
          });

          res.status(201).send({ msg: "User Register Successfully", newUser });
        })
        .catch((error) => {
          return res.status(500).send({
            error: "Enable to hashed password",
          });
        });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAdmin = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    console.log(name, password, email);

    const userExists = await Account.findOne({ account_name: name });

    if (userExists)
      return res.status(200).json({ message: "User already register" });

    if (password) {
      console.log(password);
      bcrypt
        .hash(password, 10)
        .then(async (hashedPassword) => {
          const newUser = await Account.create({
            account_name: name,
            account_password: hashedPassword,
            account_role: "admin",
            account_unit: 0,
            account_type: "V-LIBRE",
            account_validity: 0,
            account_email: email,
          });

          res.status(201).send({ msg: "Admin Register Successfully", newUser });
        })
        .catch((error) => {
          return res.status(500).send({
            error: "Enable to hashed password",
            error,
          });
        });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  try {
    const user = await Account.findOne({ account_name: username });
    if (!user) {
      return res.status(404).send({ error: "Username not Found!" });
    }

    const passwordCheck = await bcrypt.compare(password, user.account_password);
    if (!passwordCheck) {
      return res.status(400).send({ error: "Password does not Match!" });
    }

    //create jwt token
    const token = jwt.sign(
      {
        userId: user._id,
        username: user.account_name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.status(200).send({
      msg: "Login Successful...!",
      username: user.account_name,
      userRole: user.account_role,
      token,
      id: user._id,
    });
  } catch (error) {
    return res.status(500).send({ error });
  }
};
const getUserInfoByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Account.findOne({ _id: id });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Account.findOne({ _id: id });
    if (user) {
      await Account.deleteOne({ _id: id });
      res.status(200).send({ message: "User deleted" });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { account_name, account_email, account_role, id } = req.body;
    const user = await Account.findOne({ _id: id });
    if (user) {
      await Account.updateOne(
        { _id: id },
        {
          $set: {
            account_name: account_name,
            account_email: account_email,
            account_role: account_role,
          },
        }
      );
      res.status(200).send({ message: "User updated", user });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};
const updateFee = async (req, res) => {
  try {
    const { fee, id } = req.body;
    const user = await Account.findOne({ _id: id });
    if (user) {
      await Account.updateOne(
        { _id: id },
        {
          $set: {
            account_unit: user.account_unit - fee,
          },
        }
      );
      res.status(200).send({ message: "User updated", user });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

const updateSubscribe = async (req, res) => {
  try {
    const { title, id, price } = req.body;
    const user = await Account.findOne({ _id: id });
    if (user) {
      await Account.updateOne(
        { _id: id },
        {
          $set: {
            account_type: title,
            account_unit: user.account_unit - price,
          },
        }
      );
      res.status(200).send({ message: "User updated", user });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

export {
  getAllUsers,
  createUser,
  getUserInfoByID,
  login,
  deleteUser,
  createAdmin,
  updateUser,
  updateFee,
  updateSubscribe,
};
