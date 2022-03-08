import { Request, Response } from 'express';
import { GetAllAdressService } from '../services/GetAllAdressService';



export class GetallAdressController{
    async handle(resquet:Request, response:Response){
        const service = new GetAllAdressService();


        const adress = await service.execute();
        
        return response.json(adress);


    }

}