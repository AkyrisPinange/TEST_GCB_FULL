import { GetAllService } from '../services/GetAllService';
import { Request, Response } from 'express';



export class GetAllController{
    async handle(request:Request,response:Response){
        const{search} = request.params;
        const service = new GetAllService();

        const allSearch = await service.execute(search);

        return response.json(allSearch);
        
    }
}