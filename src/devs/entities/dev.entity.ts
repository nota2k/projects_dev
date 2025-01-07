import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("devs")
export class Dev {
     @PrimaryGeneratedColumn()
     id: number;
     
     @Column()
     name: string;
     
     @Column()
     experience_level: number;
     
     @Column()
     status: string;
}
