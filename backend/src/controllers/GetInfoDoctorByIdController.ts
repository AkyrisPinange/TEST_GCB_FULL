import { Request, Response } from "express";
import { GetInfoDoctorByIdService } from '../services/GetInfoDoctorByIdService';

export class GetInfoDoctorByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;


    const service = new GetInfoDoctorByIdService();

    const result = await service.execute(id);

    
    return response.json(result)
  }
}
