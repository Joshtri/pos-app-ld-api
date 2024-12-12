import express from 'express'
import type {Request, Response} from 'express';
import { ParfumController } from '../controllers/ParfumController.ts';

const parfumRoute = express.Router();
const parfumController = new ParfumController();


parfumRoute.get('/parfum',(req: Request, res: Response)=>{
    parfumController.getAllParfum(req,res);
})

parfumRoute.post('/parfum',(req: Request, res: Response)=>{
    parfumController.createParfum(req,res);
})

export default parfumRoute;