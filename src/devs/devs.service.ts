import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDevDto } from './dto/create-dev.dto';
import { UpdateDevDto } from './dto/update-dev.dto';
import { Dev } from './entities/dev.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DevsService {
  constructor(
    @InjectRepository(Dev)
    private devsRepository: Repository<Dev>
  ) {}

  create(createDevDto: CreateDevDto) {
    const newDev = this.devsRepository.create(createDevDto);
    return this.devsRepository.save(newDev);
  }

  findAll(): Promise<Dev[]> {
    const devs = this.devsRepository.find();
    return devs;
  }

  findOne(id: number): Promise<Dev> {
    const dev = this.devsRepository.findOneBy({ id });
    return dev;
  }

  async update(id: number, updateDevDto: UpdateDevDto): Promise<Dev> {
    const dev = await this.devsRepository.findOneBy({ id });
    if (!dev) {
      throw new NotFoundException(`'Dev with id ${id} not found'`);
    }
    await this.devsRepository.update(id, updateDevDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.devsRepository.delete(id);
  }
}
