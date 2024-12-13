import { Request, Response } from "express";
import { PaketService } from "../services/PaketService";



export class PaketController{
    private paketService: PaketService;

    constructor(){
        this.paketService = new PaketService();
    }

    async createPaket(req: Request, res:Response):Promise<void>{
        try {
            const paket = await this.paketService.createPaket(req.body);
            res.status(201).json({
                status: "success",
                message: "data paket berhasil",
                data: paket
            })
        } catch (error) {
            res.status(500).json({ error: 'Gagal membuat paket', message: (error as Error).message });
 
        }
    }

    async getAllPaket(req: Request, res: Response): Promise<void> {
        try {
            const paketList = await this.paketService.getAllPaket();
    
            res.status(200).json({
                status: "success",
                message: "Berhasil mendapatkan daftar paket.",
                data: paketList, // Mengembalikan data paket
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: "Gagal mendapatkan daftar paket.",
                error: (error as Error).message,
            });
        }
    }
}