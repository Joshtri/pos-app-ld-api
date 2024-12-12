import { Transaksi } from '@prisma/client';
import { TransaksiRepository } from '../repositories/TransaksiRepository.ts';

export class TransaksiService {
  private transaksiRepo: TransaksiRepository;

  constructor() {
    this.transaksiRepo = new TransaksiRepository();
  }

  async getAllTransaksi(): Promise<Transaksi[]> {
    return this.transaksiRepo.getAllTransaksi();
  }

  async getTransaksiById(id: string): Promise<Transaksi | null> {
    return this.transaksiRepo.getTransaksiById(id);
  }

  async createTransaksi(data: Omit<Transaksi, 'id' | 'dibuatPada'>): Promise<Transaksi> {
    return this.transaksiRepo.createTransaksi(data);
  }

  async updateTransaksi(id: string, data: Partial<Omit<Transaksi, 'id' | 'dibuatPada'>>): Promise<Transaksi | null> {
    return this.transaksiRepo.updateTransaksi(id, data);
  }

  async deleteTransaksi(id: string): Promise<Transaksi | null> {
    return this.transaksiRepo.deleteTransaksi(id);
  }
}
