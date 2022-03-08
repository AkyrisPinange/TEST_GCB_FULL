import { Column, 
        CreateDateColumn,
        Entity, 
        OneToOne,
        JoinColumn, 
        PrimaryGeneratedColumn, 
        UpdateDateColumn, 
        ManyToOne, 
        OneToMany, 
        PrimaryColumn,
        DeleteDateColumn} from 'typeorm';
import {v4 as uuid} from "uuid"

@Entity('InfoDoctors')
export default class InfoDoctor {

    @PrimaryColumn()
    id: string;

    @Column({
        length: 120
    })
    nome: string;

    @Column()
    crm: number;

    @Column()
    telFixo: number;

    @Column()
    telCelular: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    Updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    constructor(){

        if(!this.id){
            this.id = uuid()
        }
    }

}