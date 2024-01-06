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

import { CursosService } from '../service/curso.service';
import { Curso } from '../entities/curso.entity';
import { CursoDto } from '../dto/create-curso.dto';
import { UpdateCursoDto } from '../dto/update-curso.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Get()
  async listAll(): Promise<Curso[]> {
    return await this.cursosService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Curso> {
    return await this.cursosService.findById(id);
  }

  @Post()
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
    @Body() dto: UpdateCursoDto,
  ): Promise<void> {
    await this.cursosService.update(id, dto);
  }
}
