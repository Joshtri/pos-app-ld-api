import { Request, Response } from 'express';
import { PenggunaService } from '../services/PenggunaService.ts';

export class PenggunaController {
  private penggunaService: PenggunaService;
  constructor() {
    this.penggunaService = new PenggunaService();
  }

  async createPengguna(req: Request, res: Response): Promise<void> {
    try {
      const pengguna = await this.penggunaService.createPengguna(req.body);
      res.status(201).json(pengguna);
    } catch (error) {
      res.status(500).json({ error: 'Gagal membuat pengguna', message: (error as Error).message });
    }
  }

  async getPenggunaById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const pengguna = await this.penggunaService.getPenggunaById(id);
      if (!pengguna) {
        res.status(404).json({ error: 'Pengguna tidak ditemukan' });
        return;
      }
      res.json(pengguna);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'; 
      res.status(500).json({ error: 'Gagal mendapatkan pengguna', message: errorMessage})
    }
  }

  async getAllPengguna(req: Request, res: Response): Promise<void> {
    try {
      const penggunaList = await this.penggunaService.getAllPengguna();
      res.json(penggunaList);
    } catch (error) {
      res.status(500).json({ error: 'Gagal mendapatkan pengguna', message: (error as Error).message });
    }
  }

  async updatePengguna(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const pengguna = await this.penggunaService.updatePengguna(id, req.body);
      if (!pengguna) {
        res.status(404).json({ error: 'Pengguna tidak ditemukan' });
        return;
      }
      res.json(pengguna);
    } catch (error) {
      res.status(500).json({ error: 'Gagal memperbarui pengguna', message: (error as Error).message });
    }
  }

  async deletePengguna(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const pengguna = await this.penggunaService.deletePengguna(id);
      if (!pengguna) {
        res.status(404).json({ error: 'Pengguna tidak ditemukan' });
        return;
      }
      res.json({ message: 'Pengguna berhasil dihapus', pengguna });
    } catch (error) {
      res.status(500).json({ error: 'Gagal menghapus pengguna', message: (error as Error).message });
    }
  }
}
