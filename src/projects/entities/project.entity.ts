import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Dev } from '../../devs/entities/dev.entity';
import { Client } from '../../clients/entities/client.entity';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  deadline: string;

  @Column()
  status: string;

  @Column()
  price: number;

  @ManyToMany(() => Dev)
  @JoinTable({name: "projects_devs"})
  devs: Dev[];

  @ManyToOne(() => Client, (client) => client.projects)
  client: Client;
}
