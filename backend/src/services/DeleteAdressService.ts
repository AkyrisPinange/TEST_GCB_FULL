import { getRepository } from 'typeorm';
import Adress from '../entities/Adress';



export class DeleteAdressService{
    async execute(id:string){
        const repo =  getRepository(Adress);

        if(!(await repo.findOne(id))){
            return new Error("Endereço não Existe");
        }

        await repo.softDelete(id);

    }



}