import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import cookieSession from "cookie-session";
import connectDB from "./mongodb/connect.js";

import accountRouter from "./routes/account.routes.js";
import bikeRouter from "./routes/bike.routes.js";
import stationRouter from "./routes/station.routes.js";
import contactRouter from "./routes/contact.routes.js";
import rentBikeRouter from "./routes/rentBike.routes.js";
import returnBikeRouter from "./routes/returnBike.routes.js";
import dataRouter from "./routes/data.routes.js";

dotenv.config();

const app = express();

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use("/api/v1/users", accountRouter);
app.use("/api/v1/bikes", bikeRouter);
app.use("/api/v1/stations", stationRouter);
app.use("/api/v1/contacts", contactRouter);
app.use("/api/v1/rentBike", rentBikeRouter);
app.use("/api/v1/returnBike", returnBikeRouter);
app.use("/api/v1/data", dataRouter);

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () =>
      console.log("Server started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
