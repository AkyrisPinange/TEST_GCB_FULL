import { Request, Response, response } from "express";
import { GetAllInfoDoctorsService } from "../services/GetAllInfoDoctorsService";

export class GetAllInfoDoctorsController {
  async handle(request: Request, response: Response) {
    const service = new GetAllInfoDoctorsService();

    const infoDoctor = await service.execute();

    return response.json(infoDoctor);
  }
}
