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

    async getPaketById(req:Request, res: Response): Promise<void>{
        try {
            const {id} = req.params;
            const paket = await this.paketService.getPaketById(id);
            
            if (!paket) {
                res.status(404).json({ error: 'paket tidak ditemukan' });
                return;
            }
            // res.json(paket);
            res.status(201).json({
                status: "success",
                message: "berhasil mendapatkan data paket",
                data: paket
            })

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error'; 
            res.status(500).json({ 
                status: "error",
                error: 'Gagal mendapatkan pengguna',
                message: errorMessage
            })
        }
    }

    async updatePaket(req:Request, res:Response): Promise<void>{
        try {
            const {id} = req.params;
            const paket = await this.paketService.updatePaket(id, req.body);

            if (!paket) {
                res.status(404).json({ error: 'Paket tidak ditemukan' });
                return;
            }
            res.status(201).json({
                status: "success",
                message: "berhasil memperbarui paket",
                data: paket
            });

        } catch (error) {
            const errorMessage =  error instanceof Error ? error.message : 'Unknown error';
            res.status(500).json({
                status: "error",
                error: "gagal memperbarui paket",
                message: errorMessage
            })
        }
    }

    //hapus paket
    async deletePaket(req:Request, res:Response): Promise<void>{
        try {
            const {id} = req.params;
            const paket = await this.paketService.deletePaket(id);

            res.status(201).json({
                status: "success",
                error: "berhasil menghapus paket",
                data: paket
            });
            
        } catch (error) {
            const errorMessage =  error instanceof Error ? error.message : 'Unknown error';
            res.status(500).json({
                status: "error",
                error: "gagal menghapus paket",
                message: errorMessage
            });
        }
    }
}