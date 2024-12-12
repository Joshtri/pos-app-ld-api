import { PrismaClient, Transaksi } from '@prisma/client';

export class TransaksiRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllTransaksi(): Promise<Transaksi[]> {
    return this.prisma.transaksi.findMany({
      include: { pelanggan: true, pengguna: true, layanan: true, paket: true, parfum: true },
    });
  }

  async getTransaksiById(id: string): Promise<Transaksi | null> {
    return this.prisma.transaksi.findUnique({
      where: { id },
      include: { pelanggan: true, pengguna: true, layanan: true, paket: true, parfum: true },
    });
  }

  async createTransaksi(data: Omit<Transaksi, 'id' | 'dibuatPada'>): Promise<Transaksi> {
    return this.prisma.transaksi.create({ data });
  }

  async updateTransaksi(id: string, data: Partial<Omit<Transaksi, 'id' | 'dibuatPada'>>): Promise<Transaksi | null> {
    return this.prisma.transaksi.update({
      where: { id },
      data,
    });
  }

  async deleteTransaksi(id: string): Promise<Transaksi | null> {
    return this.prisma.transaksi.delete({
      where: { id },
    });
  }
}
