import { getRepository } from "typeorm";
import Specialties from "../entities/Specialties";

type InfoDoctorRequest = {
  name: string;
};

export class CreateSpecialtiesService {
  async execute({ name }: InfoDoctorRequest): Promise<Specialties | Error> {
    const repo = getRepository(Specialties);

    const specialties = repo.create({
      name,
    });
  

    await repo.save(specialties);

    return specialties;
  }
}
