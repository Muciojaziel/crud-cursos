import { Injectable } from '@nestjs/common';

@Injectable()
export class CursosService {
  getCursos(): Array<object> {
    const cursos: Array<object> = [
      {
        id: 1,
        descricao: 'Excel básico',
      },
      {
        id: 2,
        descricao: 'Excel avançado',
      },
      {
        id: 3,
        descricao: 'Power BI',
      },
    ];
    return cursos;
  }
}
