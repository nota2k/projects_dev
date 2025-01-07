import { Module } from '@nestjs/common';
import { DevsService } from './devs.service';
import { DevsController } from './devs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dev } from '../devs/entities/dev.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dev])],
  controllers: [DevsController],
  providers: [DevsService],
})
export class DevsModule {}
