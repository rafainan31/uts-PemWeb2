import express from "express";
import cors from "cors";

import eventRoute from "../src/routes/eventRoute.js";
import categoryRoute from "../src/routes/categoryRoute.js";
import pembicaraRoute from "../src/routes/pembicaraRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend berhasil jalan di Vercel!");
});

// app.use("/events", eventRoute);
// app.use("/categories", categoryRoute);

// // biar dua-duanya bisa dipakai
// app.use("/speakers", pembicaraRoute);
// app.use("/pembicara", pembicaraRoute);

export default app;