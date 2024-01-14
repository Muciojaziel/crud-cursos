import { Certificado } from '@/certificado/entities/certificado.entity';
import { CertificadoService } from '@/certificado/certificado.service';
import { Curso } from '@cursos/entities/curso.entity';
import { Controller, Get, Injectable, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Certificado')
@Controller('certificado')
export class CertificadoController {
    constructor(private readonly certificadoService: CertificadoService){}

    @Get()
    async findAll(): Promise<Certificado[]>{
        return await this.certificadoService.findAll();
    }

    @Get(':cpf')
    async getCertificado(@Param('cpf') cpf: string){
        return await this.certificadoService.findByCPF(cpf);
    }

}
