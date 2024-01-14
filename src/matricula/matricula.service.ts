import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matricula } from './entities/matricula.entity';

@Injectable()
export class MatriculaService {
    constructor(
        @InjectRepository(Matricula)
        private readonly estudanteCursoRepository: Repository<Matricula>,
    ) {}

      async find() {
        return this.estudanteCursoRepository.find();
      }

      async getInfoByIdEstudante(id_estudante: number) {
        return await this.estudanteCursoRepository.findOne({
          where: { id: id_estudante },
          relations: ['status'] 
        })
      }
}
