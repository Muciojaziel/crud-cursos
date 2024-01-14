import { Controller, Get, Injectable, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MatriculaService } from './matricula.service';

@ApiTags('Matricula')
@Controller('matricula')
export class MatriculaController {
    constructor(private readonly matriculaService: MatriculaService){}

    @Get()
    async findAll(){
        return await this.matriculaService.find();
    }

}
