import { PrismaClient } from "@prisma/client";
import { Paket } from "@prisma/client";


export class PaketRepository{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async createPaket(data: Omit<Paket, 'id' | 'dibuatPada'>): Promise<Paket>{
        return this.prisma.paket.create({
            data
        })
    }

    async getAllPaket():Promise<Paket[]>{
        return this.prisma.paket.findMany();
    }

    async getPaketById(id:string):Promise<Paket | null >{
        return this.prisma.paket.findUnique({
            where: {id}
        })
    }

    async updatePaket(id:string, data: Partial<Omit<Paket,'id' | 'dibuatPada'>>): Promise<Paket | null>{
        return this.prisma.paket.update({
            where: { id },
            data
        })
    }
    
    //Delete paket
    async deletePaket(id:string): Promise<Paket | null>{
        return this.prisma.paket.delete({
            where: {id}
        })
    }
}