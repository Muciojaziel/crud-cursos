import { Test, TestingModule } from '@nestjs/testing';
import { EstudanteCursoService } from '../../matricula/matricula.service';

describe('EstudanteCursoService', () => {
  let service: EstudanteCursoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstudanteCursoService],
    }).compile();

    service = module.get<EstudanteCursoService>(EstudanteCursoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
