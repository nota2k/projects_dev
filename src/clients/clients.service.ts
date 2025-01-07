import { Injectable } from '@nestjs/common';
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
    const client = this.clientsRepository.findOneBy({id});
    return client;
  }

  async update(id: number, client: Partial<Client>): Promise<Client> {
    await this.clientsRepository.update(id, client);
    return this.clientsRepository.findOneBy({id});
  }

  async remove(id: number): Promise<void> {
    await this.clientsRepository.delete(id);
  }
}
