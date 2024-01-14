import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';

import { CursoService } from './curso.service';
import { Curso } from './entities/curso.entity';
import { CursoDto } from './dto/create-curso.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Cursos')
@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursoService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de cursos.', type: CursoDto})
  @ApiResponse({ status: 403, description: 'Acesso permitido somente à perfil administrador.'})
  async listAll(): Promise<Curso[]> {
    return await this.cursosService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Curso> {
    return await this.cursosService.findById(id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Curso criado com sucesso.', type: CursoDto})
  @ApiResponse({ status: 403, description: 'Acesso permitido somente à perfil administrador.'})
  @HttpCode(HttpStatus.CREATED)
  async createCurso(@Body() cursoDto: CursoDto) {
    return await this.cursosService.create(cursoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async deleteCurso(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.cursosService.delete(id);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateCurso(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CursoDto,
  ): Promise<void> {
    await this.cursosService.update(id, dto);
  }
}
