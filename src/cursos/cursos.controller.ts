import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
//
import { CursosService } from './cursos.service';
import { Cursos } from './entities/cursos.entity';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Get()
  async listAll(): Promise<Cursos[]> {
    return await this.cursosService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return await this.cursosService.findById(id);
  }
}
