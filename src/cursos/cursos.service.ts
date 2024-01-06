import { Injectable, NotFoundException } from '@nestjs/common';
import { Cursos } from './entities/cursos.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Cursos)
    private readonly cursosRepository: Repository<Cursos>,
  ) {}

  async findAll(): Promise<Cursos[]> {
    return await this.cursosRepository.find();
  }

  async findById(id: number): Promise<Cursos> {
    return await this.buscarOuFalhar(id);
  }

  async buscarOuFalhar(id: number): Promise<Cursos> {
    const cursoProcurado = await this.cursosRepository.findOne({
      where: { id },
    });

    if (!cursoProcurado)
      throw new NotFoundException(`Curso com Id: ${id} não encontrado`);

    return cursoProcurado;
  }
}
