import { Request, Response, response, json } from 'express';
import { UpdateInfoDoctorsService } from "../services/UpdateInfoDoctorsService";

export class UpdateInfodoctorsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, crm, telFixo, telCelular } = request.body;

    const service = new UpdateInfoDoctorsService();

    console.log(id)
    const result = await service.execute({
      id,
      nome,
      crm,
      telFixo,
      telCelular
    });

    
    console.log(id);
    if(result instanceof Error){

        return response.status(400).json(result.message);

    }

    return response.json(result);
  }
}
