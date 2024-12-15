import express from "express";
import type { Request, Response } from "express";
import { PaketController } from "../controllers/PaketController";

const paketRoute = express.Router();
const paketController = new PaketController();

// Mendapatkan semua paket
paketRoute.get("/paket", (req: Request, res: Response) => {
  paketController.getAllPaket(req, res);
});

// Membuat paket baru
paketRoute.post("/paket", (req: Request, res: Response) => {
  paketController.createPaket(req, res);
});

// Mendapatkan paket berdasarkan ID
paketRoute.get("/paket/:id", (req: Request, res: Response) => {
  paketController.getPaketById(req, res);
});

// Memperbarui paket berdasarkan ID
paketRoute.patch("/paket/:id", (req: Request, res: Response) => {
  paketController.updatePaket(req, res);
});

// Menghapus paket berdasarkan ID
paketRoute.delete("/paket/:id", (req: Request, res: Response) => {
  paketController.deletePaket(req, res);
});

export default paketRoute;
