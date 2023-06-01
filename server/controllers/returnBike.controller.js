import ReturnBike from "../mongodb/models/returnBike.js";
import Account from "../mongodb/models/account.js";
import Bike from "../mongodb/models/bike.js";
import RentBike from "../mongodb/models/rentBike.js";

const returnBikeAndCalculateFee = async (req, res) => {
  try {
    const { account_id, station_id, bike_id } = req.body;

    console.log(account_id, station_id, bike_id);

    const accountExist = await Account.findOne({ _id: account_id });

    if (!accountExist) {
      return res.status(400).send({ msg: "Cannot rent bike...!" });
    }

    const newReturnBike = await ReturnBike.create({
      returnBike_account_id: account_id,
      returnBike_station_id: station_id,
      returnBike_bike_id: bike_id,
      returnBike_time: new Date(),
    });

    await Bike.updateOne(
      {
        _id: bike_id,
      },
      { $set: { bike_status: true, bike_station: station_id } }
    );

    const feeAccount = await Account.findOne({ _id: account_id }).exec();

    const latestRentBikeTime = await RentBike.findOne(
      { rentBike_account_id: account_id },
      { rentBike_time: 1 }
    )
      .sort({ rentBike_time: -1 })
      .exec();
    const latestReturnBikeTime = await ReturnBike.findOne(
      { returnBike_account_id: account_id },
      { returnBike_time: 1 }
    )
      .sort({ returnBike_time: -1 })
      .exec();
    if (latestRentBikeTime && latestReturnBikeTime) {
      const timeBegin = latestRentBikeTime.rentBike_time.getTime();
      const timeReturn = latestReturnBikeTime.returnBike_time.getTime();
      const timeTravel = (timeReturn - timeBegin) / 60000;

      // Perform fee calculation here using feeAccount and timeTravel

      res.status(200).send({
        msg: "Return bike and calculate fee successful",
        timeTravel,
        feeAccount,
        returnBike: newReturnBike,
      });
    } else {
      res.status(400).send({ msg: "No rental or return history found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { returnBikeAndCalculateFee };
