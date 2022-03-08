import { Request, Response } from "express";
import { DeleteInfoDoctorsService } from "../services/DeleteInfoDoctorsService";

export class DeleteInfoDoctorsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteInfoDoctorsService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}
