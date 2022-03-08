import { getRepository } from "typeorm";
import Adress from '../entities/Adress';

export class GetAdressByIdService {
  async execute(id: string) {
    const repo = getRepository(Adress);

    const adress = await repo.findOne(id);
    return adress;
  }
}
