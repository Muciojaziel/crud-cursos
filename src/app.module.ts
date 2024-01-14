import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursoModule } from './cursos/curso.module';
import { CertificadoModule } from './certificado/certificado.module';
import { EstudanteController } from './estudante/estudante.controller';
import { EstudanteModule } from './estudante/estudante.module';
import { MatriculaModule } from './matricula/matricula.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.dev'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
      synchronize: true, // P.s: atributo que não deve ir à prod
    }),
    CursoModule,
    CertificadoModule,
    EstudanteModule,
    MatriculaModule,
  ],
  controllers: [EstudanteController],
  providers: [],
})
export class AppModule {}
