import { Dev } from '../../devs/entities/dev.entity';
import { Client } from 'src/clients/entities/client.entity';

export class CreateProjectDto {
     name: string;
     description: string;
     deadline: string;
     status: string;
     price: string;
     client: Client;
     devs: Dev[];
}
