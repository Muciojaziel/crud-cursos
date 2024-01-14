import { Estudante } from '@/estudante/entities/estudante.entity';
import { EstudanteService } from '@/estudante/estudante.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Estudante')
@Controller('estudante')
export class EstudanteController {
    constructor(
        private readonly estudanteService: EstudanteService
    ){}

    @Get()
    async findAll():Promise<Estudante[]>{
        return await this.estudanteService.findAll();
    }
}
