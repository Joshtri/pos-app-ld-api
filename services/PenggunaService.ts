import { PenggunaRepository } from '../repositories/PenggunaRepository.ts';
import type { Pengguna } from '@prisma/client';

export class PenggunaService {
  private penggunaRepo: PenggunaRepository;

  constructor() {
    this.penggunaRepo = new PenggunaRepository();
  }

  async createPengguna(data: Omit<Pengguna, "id" | "dibuatPada">): Promise<Pengguna> {
    // Validasi data input
    if (!data.username || !data.password || !data.peran) {
      throw new Error("Field username, password, dan peran wajib diisi.");
    }

    // Kirim ke repository
    return this.penggunaRepo.createPengguna(data);
  }

  async getPenggunaById(id: string): Promise<Pengguna | null> {
    return this.penggunaRepo.getPenggunaById(id);
  }

  async getAllPengguna(): Promise<Pengguna[]> {
    return this.penggunaRepo.getAllPengguna();
  }

  async updatePengguna(id: string,data: Partial<Omit<Pengguna, 'id' | 'dibuatPada'>>): Promise<Pengguna | null> {
    return this.penggunaRepo.updatePengguna(id, data);
  }

  async deletePengguna(id: string): Promise<Pengguna | null> {
    return this.penggunaRepo.deletePengguna(id);
  }
}
