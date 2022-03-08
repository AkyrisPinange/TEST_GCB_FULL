import { Request, Response } from 'express';
import { CreateInfoDoctorsService } from "../services/CreateInfoDoctorsService";

export class CreateInfoDoctorController {
  async handle(request: Request, response:Response) {
    const { nome, crm, telFixo, telCelular } = request.body;

    const service = new CreateInfoDoctorsService();

    const result = await service.execute({
      nome,
      crm,
      telFixo,
      telCelular,
    });

     if (result instanceof Error) {
       return response.status(400).json(result.message);   
     } 
    return response.json(result);
  }
}
