import { Certificado } from '@/certificado/entities/certificado.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatriculaService } from '../matricula/matricula.service';
import { StatusEnum } from '@cursos/enums/status.enum';
import { EstudanteService } from '@/estudante/estudante.service';

@Injectable()
export class CertificadoService {
    constructor(
    @InjectRepository(Certificado)
    private readonly certificadoRepository: Repository<Certificado>,
    private readonly matriculaService: MatriculaService,
    private estudanteService: EstudanteService){}

    async findAll() {
        return this.certificadoRepository.find();
    }

    async findByCPF(cpf: string) {
        const estudante = await this.estudanteService.getByCPF(cpf);
        if (!estudante) {
          throw new NotFoundException(`Estudante com CPF ${cpf} não encontrado.`);
        }

        const matriculaCurso = await this.matriculaService.getInfoByIdEstudante(estudante.id);
    
        if (!matriculaCurso) {
          throw new NotFoundException(`Estudante de ID: ${matriculaCurso.id} não está matrículado em nenhum curso.`);
        }
    
        if (matriculaCurso.status.id === StatusEnum.CONCLUIDO) {
            const certificado = await this.certificadoRepository.findOne({
                where: { matricula: matriculaCurso}
            })
          return {...estudante, ...certificado};
        }
    
        return {
          message: 'Estudante ainda não concluiu o curso.',
        };
      }

}
