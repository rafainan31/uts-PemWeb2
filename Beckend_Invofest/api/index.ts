import express from "express";
import cors from "cors";

import eventRoute from "../src/routes/eventRoute.js";
import categoryRoute from "../src/routes/categoryRoute.js";
import pembicaraRoute from "../src/routes/pembicaraRoute.js";

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Backend berhasil jalan di Vercel!");
});

app.use("/events", eventRoute);
app.use("/Events", eventRoute);

app.use("/categories", categoryRoute);

app.use("/speakers", pembicaraRoute);
app.use("/pembicara", pembicaraRoute);

if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

export default app;