import express from "express";
import cors from "cors";

import eventRoute from "../src/routes/eventRoute.js";
import categoryRoute from "../src/routes/categoryRoute.js";
import pembicaraRoute from "../src/routes/pembicaraRoute.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://uts-pem-web2-f4g7-dxgk05z1f-rafainan31s-projects.vercel.app",
      "https://invofest2026.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend berhasil jalan di Vercel!");
});

app.use("/events", eventRoute);
app.use("/categories", categoryRoute);

// PILIH SALAH SATU
// Kalau frontend kamu pakai /speakers, gunakan ini:
app.use("/speakers", pembicaraRoute);

// Kalau frontend kamu pakai /pembicara, gunakan ini:
// app.use("/pembicara", pembicaraRoute);

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

export default app;