import Station from "../mongodb/models/station.js";
import Bike from "../mongodb/models/bike.js";

const createStation = async (req, res) => {
  try {
    const { lat, lng, status } = req.body;

    const existStation = await Station.findOne({
      station_lat: lat,
      station_lng: lng,
    });

    if (existStation) {
      res.status(400).send({ msg: "already exist...!" });
    } else {
      const newStation = await Station.create({
        station_lat: lat,
        station_lng: lng,
        station_status: status,
      });
      res.status(201).send({ msg: "Create successfully...!", newStation });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeStation = async (req, res) => {
  try {
    const { id } = req.params;
    const station = await Station.findOne({ _id: id });
    if (station) {
      await Station.deleteOne({ _id: id });
      res.status(200).send({ message: "Station deleted" });
    } else {
      res.status(404).send({ message: "Station not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

const getAllStations = async (req, res) => {
  try {
    const bikes = await Bike.find({});
    const stations = await Station.find({});
    res.status(200).json({ stations, bikes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStationInfoByID = async (req, res) => {
  try {
    const { id } = req.params;
    const station = await Station.findOne({ _id: id });
    if (station) {
      res.status(200).json(station);
    } else {
      res.status(404).json({ message: "station not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBikeByStationID = async (req, res) => {
  try {
    const { id } = req.params;
    const bikes = await Bike.find({ bike_station: id });
    if (bikes) {
      res.status(200).json(bikes);
    } else {
      res.status(404).json({ message: "Bikes not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStation = async (req, res) => {
  try {
    const { station_lat, station_lng, station_status, id } = req.body;
    const station = await Station.findOne({ _id: id });
    if (station) {
      await Station.updateOne(
        { _id: id },
        {
          $set: {
            station_lat: station_lat,
            station_lng: station_lng,
            station_status: station_status,
          },
        }
      );
      res.status(200).send({ message: "Station updated", station });
    } else {
      res.status(404).send({ message: "Station not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

export {
  createStation,
  removeStation,
  getAllStations,
  getStationInfoByID,
  getBikeByStationID,
  updateStation,
};
