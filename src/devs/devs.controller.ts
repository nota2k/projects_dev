import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { DevsService } from './devs.service';
import { CreateDevDto } from './dto/create-dev.dto';
import { UpdateDevDto } from './dto/update-dev.dto';

@Controller('devs')
export class DevsController {
  constructor(private readonly devsService: DevsService) {}

  @Post('add')
  create(@Body() createDevDto: CreateDevDto) {
    return this.devsService.create(createDevDto);
  }

  @Get()
  findAll() {
    return this.devsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDevDto: UpdateDevDto) {
    return this.devsService.update(+id, updateDevDto);
  }

  @Delete('/devs/:id')
  remove(@Param('id') id: string) {
    return this.devsService.remove(+id);
  }
}
