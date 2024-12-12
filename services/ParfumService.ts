import { ParfumRepository } from "../repositories/ParfumRepository.ts";
import { Parfum, PrismaClient } from "@prisma/client";

export class ParfumService{
    private parfumRepo : ParfumRepository;

    /**
     *
     */
    constructor() {
        this.parfumRepo = new ParfumRepository();     
    }

    async createParfum(data: Omit<Parfum, 'id' | "dibuatPada">): Promise<Parfum> {
        
        // Validasi data input
        if (!data.nama) {
            throw new Error("Field nama parfum wajib diisi.");
        }

        return this.parfumRepo.createParfum(data);
    }

    async getParfumId(id:string): Promise<Parfum | null> {
        return this.parfumRepo.getParfumById(id);
    }

    async getAllParfum(): Promise<Parfum[]>{
        return this.parfumRepo.getAllParfum();
    }

    async deleteParfum(id: string): Promise<Parfum | null>{
        return this.parfumRepo.deleteParfum(id)
    }

    async updateParfum(id:string, data: Partial<Omit<Parfum, 'id' | 'dibuatPada'>>): Promise<Parfum | null>{
        return this.parfumRepo.updateParfum(id,data);
        
    }


    
}