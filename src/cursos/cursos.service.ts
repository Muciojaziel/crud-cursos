import { Injectable } from '@nestjs/common';
import { Cursos } from './cursos.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Cursos)
    private readonly cursosRepository: Repository<Cursos>,
  ) {}

  findAll(): Promise<Cursos[]> {
    return this.cursosRepository.find();
  }
}
