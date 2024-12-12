import { Request, Response } from 'express';
import { TransaksiService } from '../services/TransaksiService.ts';

export class TransaksiController {
  private transaksiService: TransaksiService;

  constructor() {
    this.transaksiService = new TransaksiService();
  }

  async getAllTransaksi(req: Request, res: Response): Promise<void> {
    try {
      const transaksiList = await this.transaksiService.getAllTransaksi();
      res.status(200).json({ status: 'success', data: transaksiList });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Gagal mendapatkan transaksi', error: (error as Error).message });
    }
  }

  async getTransaksiById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const transaksi = await this.transaksiService.getTransaksiById(id);
      if (!transaksi) {
        res.status(404).json({ status: 'error', message: 'Transaksi tidak ditemukan' });
        return;
      }
      res.status(200).json({ status: 'success', data: transaksi });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Gagal mendapatkan transaksi', error: (error as Error).message });
    }
  }

  async createTransaksi(req: Request, res: Response): Promise<void> {
    try {
      const transaksi = await this.transaksiService.createTransaksi(req.body);
      res.status(201).json({ status: 'success', data: transaksi });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Gagal membuat transaksi', error: (error as Error).message });
    }
  }

  async updateTransaksi(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const transaksi = await this.transaksiService.updateTransaksi(id, req.body);
      if (!transaksi) {
        res.status(404).json({ status: 'error', message: 'Transaksi tidak ditemukan' });
        return;
      }
      res.status(200).json({ status: 'success', data: transaksi });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Gagal memperbarui transaksi', error: (error as Error).message });
    }
  }

  async deleteTransaksi(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const transaksi = await this.transaksiService.deleteTransaksi(id);
      if (!transaksi) {
        res.status(404).json({ status: 'error', message: 'Transaksi tidak ditemukan' });
        return;
      }
      res.status(200).json({ status: 'success', message: 'Transaksi berhasil dihapus', data: transaksi });
    } catch (error) {
      res.status(500).json({ status: 'error', message: 'Gagal menghapus transaksi', error: (error as Error).message });
    }
  }
}
