import express from 'express';
import type { Request,Response } from 'express';
import { PenggunaController } from '../controllers/PenggunaController.ts';

const penggunaRoute = express.Router();
const penggunaController = new PenggunaController();

  // Route untuk membuat pengguna baru
  penggunaRoute.post('/pengguna', (req: Request, res: Response) => {
    penggunaController.createPengguna(req, res);
  });

// Route untuk mendapatkan pengguna berdasarkan ID
penggunaRoute.get('/pengguna/:id', (req: Request, res: Response) => {
  penggunaController.getPenggunaById(req, res);
});

// Route untuk mendapatkan semua pengguna
penggunaRoute.get('/pengguna', (req: Request, res: Response) => {
  penggunaController.getAllPengguna(req, res);
});

// Route untuk memperbarui pengguna berdasarkan ID
penggunaRoute.put('/pengguna/:id', (req: Request, res: Response) => {
  penggunaController.updatePengguna(req, res);
});

// Route untuk menghapus pengguna berdasarkan ID
penggunaRoute.delete('/pengguna/:id', (req: Request, res: Response) => {
  penggunaController.deletePengguna(req, res);
});

export default penggunaRoute;
