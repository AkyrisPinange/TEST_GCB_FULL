import { getRepository } from "typeorm";
import Specialties from "../entities/Specialties";

export class GetAllSpecialtiesService {
  async execute() {
    const repo = getRepository(Specialties);

    const specialties = await repo.find();

    return specialties;
  }
}
