import { Controller, Get } from '@nestjs/common';
import { CursosService } from './cursos.service';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Get()
  listAll(): Array<object> {
    return this.cursosService.getCursos();
  }
}
