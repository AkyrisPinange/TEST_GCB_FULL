import { getRepository } from "typeorm";
import InfoDoctor from "../entities/InfoDoctors";

export class DeleteInfoDoctorsService {
  async execute(id: string) {
    const repo = getRepository(InfoDoctor);

    if (!(await repo.findOne(id))) {
      return new Error("Medico não Existe");
    }
     
    await repo.softDelete(id);
  }
}
