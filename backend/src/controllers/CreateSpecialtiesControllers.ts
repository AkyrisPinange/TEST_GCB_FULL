import { Response, Request } from 'express';
import { CreateSpecialtiesService } from '../services/CreateSpecialtiesService';



export class CreateSpecialtiesController{
   async handle(request:Request, response:Response){
       const{name} = request.body;

       const service = new CreateSpecialtiesService();

       const result = await service.execute({
           name
       });
       if(result instanceof Error){
           return response.status(400).json(result.message);
       }

       return response.json(result);

   }

}