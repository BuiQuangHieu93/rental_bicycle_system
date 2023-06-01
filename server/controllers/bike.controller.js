import Bike from "../mongodb/models/bike.js";
import Station from "../mongodb/models/station.js";
import crypto from "crypto";

const createBike = async (req, res) => {
  try {
    const { id } = req.body;

    const stationExists = await Station.findOne({ _id: id });

    if (!stationExists)
      return res.status(200).json({ message: "Station not exist" });

    const generateCode = async () => {
      const randomStr =
        crypto.randomBytes(7).toString("hex").toUpperCase() +
        "-" +
        crypto.randomBytes(8).toString("hex").toUpperCase();
      const bike_code = await Bike.findOne({ bike_code: randomStr });

      if (bike_code) return generateCode();

      return randomStr;
    };

    const bike_code = await generateCode();

    if (bike_code) {
      const newBike = await Bike.create({
        bike_station: id,
        bike_code,
        bike_status: true,
        bike_date_add: new Date(),
      });

      res.status(201).send({ msg: "Successfully added bike...!", newBike });
    } else {
      res.status(400).send({ msg: "Bike_code not create" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllBikes = async (req, res) => {
  try {
    const bike = await Bike.find({});
    res.status(200).json(bike);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeBike = async (req, res) => {
  try {
    const { id } = req.params;
    const bike = await Bike.findOne({ _id: id });
    if (bike) {
      await Bike.deleteOne({ _id: id });
      res.status(200).send({ message: "Bike deleted" });
    } else {
      res.status(404).send({ message: "Bike not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

const updateBike = async (req, res) => {
  try {
    const { station_id, bike_status, id } = req.body;
    const bike = await Bike.findOne({ _id: id });
    if (bike) {
      await Bike.updateOne(
        { _id: id },
        {
          $set: {
            station_id: station_id,
            bike_status: bike_status,
          },
        }
      );
      res.status(200).send({ message: "Bike updated", bike });
    } else {
      res.status(404).send({ message: "Bike not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

export { createBike, getAllBikes, removeBike, updateBike };
