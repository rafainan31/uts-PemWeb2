import express from "express";
import cors from "cors";

import eventRoute from "../src/routes/eventRoute.js";
import categoryRoute from "../src/routes/categoryRoute.js";
import pembicaraRoute from "../src/routes/pembicaraRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Backend berhasil jalan di Vercel!");
});

app.use("/events", eventRoute);
app.use("/categories", categoryRoute);

// dua-duanya dibuat aktif supaya frontend lama atau baru tetap jalan
app.use("/speakers", pembicaraRoute);
app.use("/pembicara", pembicaraRoute);

if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

export default app;