import RentBike from "../mongodb/models/rentBike.js";
import Account from "../mongodb/models/account.js";
import Bike from "../mongodb/models/bike.js";

const createRentBike = async (req, res) => {
  try {
    const { account_id, station_id, bike_id } = req.body;

    const accountExist = await Account.findOne({ _id: account_id });

    if (accountExist) {
      const newRentBike = await RentBike.create({
        rentBike_account_id: account_id,
        rentBike_bike_id: station_id,
        rentBike_station_id: bike_id,
        rentBike_time: new Date(),
      });

      await Bike.updateOne(
        {
          _id: bike_id,
        },
        { $set: { bike_status: false } }
      );

      res
        .status(201)
        .send({ msg: "Successfully rented bike...!", rentBike: newRentBike });
    } else {
      res.status(400).send({ msg: "Cannot rent bike...!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createRentBike };
