import { getRepository } from "typeorm";
import InfoDoctor from "../entities/InfoDoctors";

export class GetInfoDoctorByIdService {
  async execute(id: string) {
    const repo = getRepository(InfoDoctor);

    const infoDoctor = await repo.findOne(id);
    return infoDoctor;
  }
}
