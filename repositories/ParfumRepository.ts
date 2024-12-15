import { PrismaClient } from "@prisma/client";
import { Parfum } from "@prisma/client";

export class ParfumRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    //Create a new parfum
    async createParfum(data: Omit<Parfum, 'id' | 'dibuatPada'>): Promise<Parfum> {
        return this.prisma.parfum.create({
            data
        })
    }


    // Get a parfum by ID
    async getParfumById(id: string): Promise<Parfum | null> {
        return this.prisma.parfum.findUnique({
            where: { id }
        })
    }



    //Get all parfum
    async getAllParfum(): Promise<Parfum[]> {
        return this.prisma.parfum.findMany();
    }

    // Update parfum by ID
    // Update parfum berdasarkan ID
    async updateParfum(
        id: string,
        data: Partial<Omit<Parfum, "id" | "dibuatPada">>
    ): Promise<Parfum | null> {
        try {
            return await this.prisma.parfum.update({
                where: { id },
                data, // Data parsial untuk diperbarui
            });
        } catch (error) {
            console.error("Error updating parfum:", error);
            return null; // Kembalikan null jika ada error (misalnya, ID tidak ditemukan)
        }
    }


    //Delete parfum
    async deleteParfum(id: string): Promise<Parfum | null> {
        return this.prisma.parfum.delete({
            where: { id }
        })
    }






}