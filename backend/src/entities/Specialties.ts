import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {v4 as uuid} from "uuid"


@Entity()
export default class Specialties{


@PrimaryGeneratedColumn('uuid')    
id:string;

@Column()
name:string;

constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}