import { Curso } from '../entities/curso.entity';

export const cursoMock: Curso = {
  id: 1,
  nome: 'Desenvolvimento Web',
  descricao: 'Curso completo de desenvolvimento web front-end e back-end.',
  carga_horaria: 120,
  preco: 299.99,
  matriculas: [],
  isAtivo: true,
  modulos: [], // Incluindo o mock de Modulo criado acima
};
