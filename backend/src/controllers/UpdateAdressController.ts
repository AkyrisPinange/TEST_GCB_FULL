import { Request, Response } from "express";
import { UpdateAdressService } from "../services/UpdateAdressService";

export class UpdateAdressController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { cep, logradouro, complemento, bairro, localidade, uf,id_doctor} =
      request.body;

    const service = new UpdateAdressService();

    const result = await service.execute({
      id,
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf,
      id_doctor
    });

    if(result instanceof Error){

      return response.status(400).json(result.message);

    }

    return response.json(result);
  }
}
