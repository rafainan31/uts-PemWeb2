import express from "express";
import cors from "cors";

import eventRoute from "../src/routes/eventRoute.js";
import categoryRoute from "../src/routes/categoryRoute.js";
import pembicaraRoute from "../src/routes/pembicaraRoute.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend berhasil jalan di Vercel!");
});

app.use("/events", eventRoute);
app.use("/categories", categoryRoute);
app.use("/speakers", pembicaraRoute);

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

export default app;