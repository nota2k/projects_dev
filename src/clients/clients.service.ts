import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientsRepository: Repository<Client>,
  ) {}

  create(createClientDto: CreateClientDto) {
    const newClient = this.clientsRepository.create(createClientDto);
    return this.clientsRepository.save(newClient);
  }

  findAll(): Promise<Client[]> {
    const clients = this.clientsRepository.find();
    return clients;
  }

  findOne(id: number): Promise<Client> {
    const client = this.clientsRepository.findOneBy({ id });
    return client;
  }

  async update(id: number, clientUpdateDTO: UpdateClientDto): Promise<Client> {
    const client = await this.clientsRepository.findOneBy({ id });
    if (!client) {
      throw new NotFoundException(`'Client with id ${id} not found'`);
    }
    await this.clientsRepository.update(id,clientUpdateDTO);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    // TODO implement error handling
    await this.clientsRepository.delete(id);
  }
}
