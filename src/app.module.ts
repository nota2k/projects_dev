import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevsModule } from './devs/devs.module';
import { ProjectsModule } from './projects/projects.module';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [DevsModule, ProjectsModule, ClientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
