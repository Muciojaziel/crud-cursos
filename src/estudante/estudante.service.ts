import { Estudante } from '@/estudante/entities/estudante.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstudanteService {
    constructor(
        @InjectRepository(Estudante)
        private readonly estudanteRepository: Repository<Estudante>
    ){}

    async findAll(): Promise<Estudante[]>{
        return await this.estudanteRepository.find();
    }

    async getByCPF(cpf: string): Promise<Estudante>{
        const estudante = await this.estudanteRepository.findOne({
            where: {cpf}
        });

        if(!estudante) {
            throw new NotFoundException(`Estudante com número de CPF: ${cpf} não encontrado`);
        }

        return estudante;
    }

    
}
