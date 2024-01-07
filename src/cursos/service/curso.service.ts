import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Curso } from '../entities/curso.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoDto } from '../dto/create-curso.dto';
import { UpdateCursoDto } from '../dto/update-curso.dto';
import { AssemblerUtilService } from '../../utils/assembler-util.service';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private readonly cursosRepository: Repository<Curso>,
    private assemblerUtil: AssemblerUtilService,
  ) {}

  async findAll(): Promise<Curso[]> {
    return await this.cursosRepository.find();
  }

  async findById(id: number): Promise<Curso> {
    return await this.buscarOuFalhar(id);
  }

  async create(dto: CursoDto): Promise<void> {
    try {
      const curso = new Curso();

      await this.cursosRepository.save(
        this.assemblerUtil.mapDtoToEntity(curso, dto),
      );
    } catch {
      throw new BadRequestException({ message: 'Erro ao criar curso' });
    }
  }

  async delete(id: number): Promise<void> {
    const cursoProcurado = await this.buscarOuFalhar(id);

    if (cursoProcurado) {
      this.cursosRepository.delete(id);
    }
  }

  async update(id: number, dto: UpdateCursoDto): Promise<void> {
    const cursoProcurado = await this.buscarOuFalhar(id);

    if (cursoProcurado) {
      const cursoAtual = this.assemblerUtil.mapDtoToEntity(cursoProcurado, dto);
      this.cursosRepository.update(cursoProcurado.id, cursoAtual);
    }
  }

  async buscarOuFalhar(id: number): Promise<Curso> {
    const cursoProcurado = await this.cursosRepository.findOne({
      where: { id },
    });

    if (!cursoProcurado) {
      throw new NotFoundException(`Curso com Id: ${id} não encontrado`);
    }

    return cursoProcurado;
  }
}
