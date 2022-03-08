import { getRepository } from 'typeorm';
import InfoDoctorsSpecialties from '../entities/InfoDoctorsSpecialties';



export class DeleteDoctorSpecialtiesService{
    async execute(id_doctor:string){
        const repo = getRepository(InfoDoctorsSpecialties);

        if(!(await repo.findOne(id_doctor))){
            return new Error("ID do Medicos não existe");
        }

        await repo.softDelete(id_doctor);
    }

}