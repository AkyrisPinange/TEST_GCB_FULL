import { getRepository } from "typeorm";
import Adress from "../entities/Adress";

export class GetAllAdressService {
  async execute() {
    const repo = getRepository(Adress);

    const adress = await repo.find({
      relations: ["infoDoctor"],
    });

    return adress;
  }
}
