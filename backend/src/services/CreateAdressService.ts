import Adress from "../entities/Adress";
import { getRepository } from "typeorm";
import InfoDoctor from "../entities/InfoDoctors";

type AdressRequest = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  id_doctor: string;
};

export class CreateAdressService {
  async execute({
    cep,
    logradouro,
    complemento,
    bairro,
    localidade,
    uf,
    id_doctor,
  }: AdressRequest): Promise<Error | Adress> {
    const repo = getRepository(Adress);
    const repoDoctor = getRepository(InfoDoctor);

    if (!(await repoDoctor.findOne(id_doctor))) {
      return new Error("Medico não encontrado!");
    }

    const adress = repo.create({
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf,
      id_doctor,
    });

    await repo.save(adress);

    return adress;
  }
}
