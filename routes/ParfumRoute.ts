import express from "express";
import type { Request, Response } from "express";
import { ParfumController } from "../controllers/ParfumController";

const parfumRoute = express.Router();
const parfumController = new ParfumController();

// Mendapatkan semua parfum
parfumRoute.get("/parfum", (req: Request, res: Response) => {
  parfumController.getAllParfum(req, res);
});

// Membuat parfum baru
parfumRoute.post("/parfum", (req: Request, res: Response) => {
  parfumController.createParfum(req, res);
});

// Memperbarui parfum berdasarkan ID (PATCH untuk update parsial)
parfumRoute.patch("/parfum/:id", (req: Request, res: Response) => {
  parfumController.updateParfum(req, res);
});

// Menghapus parfum berdasarkan ID
parfumRoute.delete("/parfum/:id", (req: Request, res: Response) => {
  parfumController.deleteParfum(req, res);
});

// Mendapatkan parfum berdasarkan ID
parfumRoute.get("/parfum/:id", (req: Request, res: Response) => {
  parfumController.getParfumById(req, res);
});

export default parfumRoute;
