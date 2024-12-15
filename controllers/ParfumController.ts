import { Request, Response } from "express";
import { ParfumService } from "../services/ParfumService";

export class ParfumController {
    private parfumService: ParfumService;

    constructor() {
        this.parfumService = new ParfumService();
    }

    async createParfum(req: Request, res: Response): Promise<void> {
        try {
            const parfum = await this.parfumService.createParfum(req.body);
            res.status(201).json(parfum)
        } catch (error) {
            res.status(500).json({ error: 'Gagal membuat parfum', message: (error as Error).message });

        }
    }
    async getAllParfum(req: Request, res: Response): Promise<void> {
        try {
            const parfumList = await this.parfumService.getAllParfum();

            res.status(200).json({
                status: "success",
                message: "Berhasil mendapatkan daftar parfum.",
                data: parfumList, // Mengembalikan data parfum
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: "Gagal mendapatkan daftar parfum.",
                error: (error as Error).message,
            });
        }
    }

    async deleteParfum(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const parfum = await this.parfumService.deleteParfum(id);

            if (!parfum) {
                res.status(404).json({ error: 'parfum tidak ditemukan' });
                return;
            }

            res.status(201).json({
                status: "success",
                message: "berhasil menghapus parfum",
                data: parfum
            })


        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            res.status(500).json({
                status: "error",
                error: "gagal menghapus parfum",
                message: errorMessage
            });
        }
    }

    async getParfumById(req: Request, res: Response): Promise<void> {
        try {

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            res.status(500).json({
                status: "error",
                error: "gagal mendapatkan data parfum",
                message: errorMessage
            });
        }
    }

    // Fungsi updateParfum
    async updateParfum(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params; // Ambil ID dari parameter URL
            const data = req.body; // Ambil data dari body request

            if (!data || Object.keys(data).length === 0) {
                res.status(400).json({
                    status: "error",
                    message: "Data untuk pembaruan harus diberikan.",
                });
                return;
            }

            // Panggil service untuk memperbarui data
            const updatedParfum = await this.parfumService.updateParfum(id, data);

            if (!updatedParfum) {
                res.status(404).json({
                    status: "error",
                    message: "Parfum tidak ditemukan.",
                });
                return;
            }

            res.status(200).json({
                status: "success",
                message: "Berhasil memperbarui parfum.",
                data: updatedParfum,
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: "Gagal memperbarui parfum.",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }


}