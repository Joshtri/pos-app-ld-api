import { Request, Response } from "express";
import { PaketService } from "../services/PaketService";



export class PaketController{
    private paketService: PaketService;

    constructor(){
        this.paketService = new PaketService();
    }

    async createPaket(req: Request, res:Response):Promise<void>{
        try {
            const paket = await this.paketService.createParfum(req.body);
            res.status(201).json(parfum)
        } catch (error) {
            res.status(500).json({ error: 'Gagal membuat paket', message: (error as Error).message });
 
        }
    }
}