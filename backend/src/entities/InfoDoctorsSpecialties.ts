import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import InfoDoctor from "./InfoDoctors";
import Specialties from './Specialties';

@Entity("InfoDoctors-Specialties")
export default class InfoDoctorsSpecialties{

    @PrimaryColumn()
    id_doctor:string

    @PrimaryColumn()
    id_specialties:string

    @ManyToOne(() => InfoDoctor)
    @JoinColumn({name: "id_doctor"})
    infoDoctor: InfoDoctor;

    @ManyToOne(() => Specialties)
    @JoinColumn({name: "id_specialties"})
    specialties: Specialties;




}