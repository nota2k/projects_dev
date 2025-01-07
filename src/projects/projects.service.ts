import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { Dev } from '../devs/entities/dev.entity';
import { Client } from '../clients/entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  create(createProjectDto) {
    const project = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(project);
  }

  findAll() {
    return this.projectRepository.find();
  }

  findOne(id) {
    return this.projectRepository.findOne(id);
  }

  update(id, updateProjectDto) {
    this.projectRepository.update(id, updateProjectDto);
    return this.projectRepository.findOne(id);
  }

  async remove(id): Promise<string> {
    const project = this.projectRepository.findOne(id);
    console.log(project);
    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    } else {
      this.projectRepository.delete(id);
      return `Project with id ${id} has been deleted`;
    }
  }

  async findClientByProjectId(projectId: number): Promise<Client> {
    const project = await this.projectRepository.findOne({
      where: {id: projectId},
      relations: ['client'] });
    if (!project) {
      throw new NotFoundException(`Project with id ${projectId} not found`);
    }
    return project.client;
  }
}
