import express from "express";
import type { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import penggunaRoute from "./routes/PenggunaRoute.ts";
import parfumRoute from "./routes/ParfumRoute.ts";
import paketRoute from "./routes/PaketRoute.ts";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// Konfigurasi CORS
const corsOptions = {
  origin: ["http://localhost:5173", "https://your-frontend-domain.com"], // Ganti dengan domain frontend Anda
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions)); // Pasang middleware CORS

app.use(express.json()); // Untuk parsing JSON body

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use('/api/v1', penggunaRoute, parfumRoute, paketRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
