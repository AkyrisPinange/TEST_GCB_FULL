
import { Request, Response } from "express";
import { GetCepService } from '../services/GetCepService';




export class GetCepController{
    async handle(request:Request, response:Response){
        const{cep} = request.params; 
        const service = new GetCepService()
        const result = await service.execute({
            cep
        });
        
        
        return response.json(result)
    }
}