import { DataSource } from 'typeorm';
import { Project } from './projects/entities/project.entity';
import { Dev } from './devs/entities/dev.entity';
import { Client } from './clients/entities/client.entity';

const AppDataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'nest_api',
  password: 'nest_api',
  database: 'projects_db',
  entities: [Project, Dev, Client],
  synchronize: false,
  migrations: ['src/database/migrations/*-migration.ts'],
  migrationsRun: false,
});


export default AppDataSource;