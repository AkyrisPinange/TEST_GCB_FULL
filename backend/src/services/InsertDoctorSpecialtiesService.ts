import { getRepository } from "typeorm";
import InfoDoctorsSpecialties from "../entities/InfoDoctorsSpecialties";

type DoctorSpecialties = {
  id_doctor: string;
  id_specialties: string;
};

export class InsertDoctorSpecialtiesService {
  async execute({
    id_doctor,
    id_specialties,
  }: DoctorSpecialties): Promise<InfoDoctorsSpecialties> {
    const repo = getRepository(InfoDoctorsSpecialties);

    const infoDoctorsSpecialties = repo.create({
      id_doctor,
      id_specialties,
    });

    await repo.save(infoDoctorsSpecialties);

    return infoDoctorsSpecialties;
  }
}
