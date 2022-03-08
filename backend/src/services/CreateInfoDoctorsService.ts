import { getRepository } from "typeorm";
import InfoDoctor from "../entities/InfoDoctors";

type InfoDoctorRequest = {
  nome: string;
  crm: number;
  telFixo: number;
  telCelular: number;
};

export class CreateInfoDoctorsService {
  async execute({
    nome,
    crm,
    telFixo,
    telCelular,
  }: InfoDoctorRequest): Promise<InfoDoctor | Error> {
    const repo = getRepository(InfoDoctor);
    if (await repo.findOne({ crm })) {
      return new Error("CRM Já Cadastrado!");
    }

    const infoDoctor = repo.create({
      nome,
      crm,
      telFixo,
      telCelular
    });
    

    await repo.save(infoDoctor);

    return infoDoctor;
  }

}
