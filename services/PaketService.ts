import { Paket } from "@prisma/client";
import { PaketRepository } from "../repositories/PaketRepository";



export class PaketService {
    private paketRepo: PaketRepository;

    constructor() {
        this.paketRepo = new PaketRepository();
    }

    async createPaket(data: Omit<Paket, 'id' | "dibuatPada">): Promise<Paket> {
        try {
            return await this.paketRepo.createPaket(data);
        } catch (error) {
            console.error("Error creating paket:", error);
            throw new Error("Gagal membuat paket baru.");
        }
    }

    // Dapatkan Semua Paket
    async getAllPaket(): Promise<Paket[]> {
        try {
            return await this.paketRepo.getAllPaket();
        } catch (error) {
            console.error("Error fetching all paket:", error);
            throw new Error("Gagal mendapatkan daftar paket.");
        }
    }

    // Dapatkan Paket Berdasarkan ID
    async getPaketById(id: string): Promise<Paket | null> {
        try {
            const paket = await this.paketRepo.getPaketById(id);
            if (!paket) {
                throw new Error("Paket tidak ditemukan.");
            }
            return paket;
        } catch (error) {
            console.error(`Error fetching paket with ID ${id}:`, error);
            throw new Error("Gagal mendapatkan paket berdasarkan ID.");
        }
    }

    // Perbarui Paket
    async updatePaket(id: string, data: Partial<Omit<Paket, 'id' | 'dibuatPada'>>): Promise<Paket | null> {
        try {
            const paket = await this.paketRepo.getPaketById(id);
            if (!paket) {
                throw new Error("Paket tidak ditemukan.");
            }
            return await this.paketRepo.updatePaket(id, data);
        } catch (error) {
            console.error(`Error updating paket with ID ${id}:`, error);
            throw new Error("Gagal memperbarui paket.");
        }
    }

    // Hapus Paket
    async deletePaket(id: string): Promise<Paket | null> {
        try {
            const paket = await this.paketRepo.getPaketById(id);
            if (!paket) {
                throw new Error("Paket tidak ditemukan.");
            }
            return await this.paketRepo.deletePaket(id);
        } catch (error) {
            console.error(`Error deleting paket with ID ${id}:`, error);
            throw new Error("Gagal menghapus paket.");
        }
    }
}