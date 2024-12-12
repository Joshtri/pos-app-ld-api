import { PrismaClient } from '@prisma/client';
// import { Pengguna } from '@prisma/client';
import { Pengguna } from '@prisma/client';
export class PenggunaRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  // Create a new pengguna
  async createPengguna(data: Omit<Pengguna, 'id' | 'dibuatPada'>): Promise<Pengguna> {
    return this.prisma.pengguna.create({
      data,
    });
  } 

  // Get a pengguna by ID
  async getPenggunaById(id: string): Promise<Pengguna | null> {
    return this.prisma.pengguna.findUnique({
      where: { id },
    });
  }

  // Get all pengguna
  async getAllPengguna(): Promise<Pengguna[]> {
    return this.prisma.pengguna.findMany();
  }

  // Update pengguna by ID
  async updatePengguna(
    id: string,
    data: Partial<Omit<Pengguna, 'id' | 'dibuatPada'>>
  ): Promise<Pengguna | null> {
    return this.prisma.pengguna.update({
      where: { id },
      data,
    });
  }

  // Delete pengguna by ID
  async deletePengguna(id: string): Promise<Pengguna | null> {
    return this.prisma.pengguna.delete({
      where: { id },
    });
  }
}
