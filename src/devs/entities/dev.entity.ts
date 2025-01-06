import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';
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

     @ManyToMany(() => Project, project => project.devs)
     projects: Project[];
}
