import { Repository, getRepository } from "typeorm";
import Adress from "../entities/Adress";

type AdressUpdateRequest = {
  id: string;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  id_doctor:string;
};

export class UpdateAdressService {
  async execute({
    id,
    cep,
    logradouro,
    complemento,
    bairro,
    localidade,
    uf,
    id_doctor
  }: AdressUpdateRequest) {
    const repo = await getRepository(Adress);
  
    const adress = await repo.findOne(id);

    if (!adress) {
      return new Error("Endereço não encontrado");
    }

    adress.cep = cep;
    adress.logradouro = logradouro;
    adress.complemento = complemento;
    adress.bairro = bairro;
    adress.localidade = localidade;
    adress.uf = uf;
    adress.id_doctor = id_doctor

    await repo.save(adress);

    return adress;
  }
}
