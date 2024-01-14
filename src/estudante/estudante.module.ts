import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudanteController } from './estudante.controller';
import { EstudanteService } from './estudante.service';
import { Estudante } from './entities/estudante.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Estudante])],
    controllers: [EstudanteController],
    providers: [EstudanteService],
    exports: [EstudanteService],
})
export class EstudanteModule {}
