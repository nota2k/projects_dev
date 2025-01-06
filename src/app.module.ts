import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevsModule } from './devs/devs.module';
import { ProjectsModule } from './projects/projects.module';
import { ClientsModule } from './clients/clients.module';
import { Dev } from './devs/entities/dev.entity';
import { Project } from './projects/entities/project.entity';
import { Client } from './clients/entities/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'nest_api',
    password: 'nest_api',
    database: 'projects_db',
    entities: [Dev, Project, Client],
    synchronize: true
  }),
    DevsModule, ProjectsModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
