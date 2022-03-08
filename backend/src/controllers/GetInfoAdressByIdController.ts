import { Request, Response } from "express";
import { GetAdressByIdService } from '../services/GetAdressByIdService';

export class GetAdressByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetAdressByIdService();

    const result = await service.execute(id);

    return response.json(result);
  }
}
