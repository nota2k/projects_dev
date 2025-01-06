import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';

@Entity("clients")
export class Client {
     @PrimaryGeneratedColumn()
     id: number;
     
     @Column()
     name: string;
     
     @Column()
     email: string;

     @OneToMany(() => Project, project => project.client)
     projects: Project[];
}
