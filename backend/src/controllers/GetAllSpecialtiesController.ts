import { Request, Response } from 'express';
import { GetAllSpecialtiesService } from '../services/GetAllSpecialtiesService';



export class GetAllSpecialtiesController{
    async handle(request:Request,response:Response){
        const service = new GetAllSpecialtiesService();

        const specialties = await service.execute();

        return response.json(specialties);
    }

}