import InfoDoctor from "./InfoDoctors";
import {
  Column,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  DeleteDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export default class Adress {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  cep: string;

  @Column()
  logradouro: string;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  id_doctor: string;

  @OneToOne(() => InfoDoctor)
  @JoinColumn({ name: "id_doctor" })
  infoDoctor: InfoDoctor;

  @Column()
  localidade: string;

  @Column()
  uf: string;

  @DeleteDateColumn()
  deleted_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
