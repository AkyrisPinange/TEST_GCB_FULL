import { getRepository } from "typeorm";
import InfoDoctor from "../entities/InfoDoctors";

type InfoDoctorUpdateRequest = {
  id: string;
  nome: string;
  crm: number;
  telFixo: number;
  telCelular: number;
};

export class UpdateInfoDoctorsService {
  async execute({
    id,
    nome,
    crm,
    telFixo,
    telCelular,
  }: InfoDoctorUpdateRequest) {
    const repo = getRepository(InfoDoctor);
    const infoDoctor = await repo.findOne(id);

    if (!infoDoctor) {
      return new Error("O Medicos não existe!");
    }

    infoDoctor.nome = nome ? nome : infoDoctor.nome;
    infoDoctor.crm = crm ? crm : infoDoctor.crm;
    infoDoctor.telFixo = telFixo ? telFixo : infoDoctor.crm;
    infoDoctor.telCelular = telCelular ? telCelular : infoDoctor.telCelular;

    await repo.save(infoDoctor);

    return infoDoctor;
  }
}
