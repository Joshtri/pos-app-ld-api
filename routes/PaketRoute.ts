import express from 'express'
import type {Request, Response} from 'express';
import { PaketController } from '../controllers/PaketController';

const paketRoute = express.Router();
const paketController = new PaketController();


paketRoute.get('/paket',(req:Request, res:Response)=>{
    paketController.getAllPaket(req,res);
})

paketRoute.post('/paket',(req:Request, res:Response)=>{
    paketController.createPaket(req,res);
});

export default paketRoute;