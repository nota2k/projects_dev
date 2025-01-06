import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project) 
    private projectRepository: Repository<Project>
  ) {}

  create(createProjectDto) {
    const project = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(project);
  }

  findAll() {
    this.projectRepository.find();
  }

  findOne(id) {
    this.projectRepository.findOne(id);
  }

  update(id, updateProjectDto) {
    this.projectRepository.update(id, updateProjectDto);
    return this.projectRepository.findOne(id);
  }

  remove(id) {
    this.projectRepository.delete(id);
  }
}
