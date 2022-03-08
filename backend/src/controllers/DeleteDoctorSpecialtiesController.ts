import { DeleteDoctorSpecialtiesService } from '../services/DeleteDoctorSpecialtiesService';
import { Request, Response } from 'express';



export class DeleteDoctorSpecialtiesController{
    async handle(request:Request,response:Response){
        const{id_doctor} = request.params;
     
        const service =  new DeleteDoctorSpecialtiesService();

        const result = await service.execute(id_doctor);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        return response.status(204).end();
    }
}