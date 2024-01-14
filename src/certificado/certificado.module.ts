import { Module } from '@nestjs/common';
import { CertificadoService } from './certificado.service';
import { CertificadoController } from './certificado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Certificado } from './entities/certificado.entity';
import { MatriculaService } from '../matricula/matricula.service';
import { MatriculaController } from '../matricula/matricula.controller';
import { EstudanteModule } from '@/estudante/estudante.module';
import { Matricula } from '@/matricula/entities/matricula.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Certificado, Matricula]), EstudanteModule],
  controllers: [CertificadoController, MatriculaController],
  providers: [CertificadoService, MatriculaService],
  exports: [MatriculaService]
})

export class CertificadoModule{};