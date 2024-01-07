import { Module } from '@nestjs/common';
import { CursosController } from './controller/curso.controller';
import { CursoService } from './service/curso.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssemblerUtilService } from '../utils/assembler-util.service';
import { Curso } from './entities/curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  controllers: [CursosController],
  providers: [CursoService, AssemblerUtilService],
})
export class CursoModule {}
