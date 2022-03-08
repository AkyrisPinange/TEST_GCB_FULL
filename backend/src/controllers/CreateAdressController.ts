import { Request, Response } from "express";
import { CreateAdressService } from "../services/CreateAdressService";

export class CreateAdressController {
  async handle(request: Request, response: Response) {
    const { cep, logradouro, complemento, bairro, localidade, uf, id_doctor } =
      request.body;
    const service = new CreateAdressService();

    const result = await service.execute({
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf,
      id_doctor,
    });

    if(result instanceof Error){

        return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}
