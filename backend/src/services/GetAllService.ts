import { createQueryBuilder, getRepository } from 'typeorm';
import Adress from '../entities/Adress';
import InfoDoctor from '../entities/InfoDoctors';
import InfoDoctorsSpecialties from '../entities/InfoDoctorsSpecialties';
import Specialties from '../entities/Specialties';




export class GetAllService{
    async execute(search:string){
        const sqlQuery = await createQueryBuilder("InfoDoctor")
                    .select("InfoDoctor.nome","NOME")
                    .addSelect("InfoDoctor.id","ID")
                    .addSelect("InfoDoctor.crm","CRM")
                    .addSelect("InfoDoctor.telFixo","TELFIXO")
                    .addSelect("InfoDoctor.telCelular","TELCELULAR")
                    .addSelect("adress.cep","CEP")
                    .addSelect("adress.bairro","BAIRRO")
                    .addSelect("adress.logradouro","logradouro")
                    .addSelect("adress.localidade","LOCALIDADE")
                    .addSelect("adress.uf","UF")
                    .leftJoinAndSelect(Adress,"adress","InfoDoctor.id = adress.id_doctor")
                    .leftJoin(InfoDoctorsSpecialties,"ifds","ifds.id_doctor = InfoDoctor.id")
                    .leftJoin(Specialties,"spt","ifds.id_specialties = spt.id")
                     .where("InfoDoctor.nome like :where", {where:`%${search}%`})
                     .orWhere("spt.name like :where", {where:`%${search}%`})
                     .orWhere("adress.cep like :where", {where:`%${search}%`})
                     .orWhere("adress.bairro like :where", {where:`%${search}%`})
                     .orWhere("adress.logradouro like :where", {where:`%${search}%`})
                     .orWhere("adress.localidade like :where", {where:`%${search}%`})
                     .orWhere("adress.uf like :where", {where:`%${search}%`})
                    .groupBy("NOME")
                    .addGroupBy("crm")
                    .addGroupBy("InfoDoctor.id")
                    .addGroupBy("InfoDoctor.telFixo")
                    .addGroupBy("InfoDoctor.telCelular")
                    .addGroupBy("adress.id")
                    .addGroupBy("cep")
                    .addGroupBy("logradouro")
                    .addGroupBy("localidade")
                    .getRawMany()

             
              return sqlQuery;

    }
}