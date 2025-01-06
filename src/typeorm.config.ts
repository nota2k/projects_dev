import { DataSource } from 'typeorm';
import { Project } from 'src/projects/entities/project.entity';
import { Dev } from 'src/devs/entities/dev.entity';
import { Client } from 'src/clients/entities/client.entity';

export const AppDataSource = new DataSource({
  type: 'mariadb', // ou 'mysql' si vous utilisez MySQL
  host: 'localhost',
  port: 3306,
  username: 'nest_api',
  password: 'nest_api',
  database: 'projects_db',
  entities: [Project, Dev, Client],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
  migrationsTableName: 'migrations'
});