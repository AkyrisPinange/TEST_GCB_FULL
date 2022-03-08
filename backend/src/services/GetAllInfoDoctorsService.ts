import { getRepository } from "typeorm";
import InfoDoctor from "../entities/InfoDoctors";

export class GetAllInfoDoctorsService {
  async execute() {
    const repo = getRepository(InfoDoctor);

    const infoDoctor = await repo.find();

    return infoDoctor;
  }
}
