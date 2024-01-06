import { Module } from '@nestjs/common';
import { CursosController } from './controller/curso.controller';
import { CursosService } from './service/curso.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssemblerUtil } from '../utils/assemblerUtil.service';
import { Curso } from './entities/curso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  controllers: [CursosController],
  providers: [CursosService, AssemblerUtil],
})
export class CursoModule {}
