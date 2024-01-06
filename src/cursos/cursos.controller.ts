import { Controller, Get } from '@nestjs/common';
//
import { CursosService } from './cursos.service';
import { Cursos } from './cursos.entity';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Get()
  listAll(): Promise<Cursos[]> {
    return this.cursosService.findAll();
  }
}
