import { Test, TestingModule } from '@nestjs/testing';
import { CursoService } from '../curso.service';
import { Curso } from '../entities/curso.entity';
import { CursosController } from '../curso.controller';
import { mockCurso } from '@cursos/__mocks__/curso.mock';

describe('CursosController', () => {
  let controller: CursosController;
  let service: CursoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursosController],
      providers: [
        {
          provide: CursoService,
          useValue: {
            findAll: jest.fn(), //.mockResolvedValue([mockCurso]),
            findById: jest.fn(),
            create: jest.fn(),
            delete: jest.fn(),
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CursosController>(CursosController);
    service = module.get<CursoService>(CursoService);
  });

  it('deve ser definido', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('listAll', () => {
    it('deve chamar CursoService.findAll', async () => {
      jest.spyOn(service, 'findAll').mockResolvedValueOnce([mockCurso]);
      expect(await controller.listAll()).toEqual([mockCurso]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('deve chamar CursoService.findById com o id correto', async () => {
      const mockCurso = new Curso();
      jest.spyOn(service, 'findById').mockResolvedValueOnce(mockCurso);
      const id = 1;
      expect(await controller.findById(id)).toBe(mockCurso);
      expect(service.findById).toHaveBeenCalledWith(id);
    });
  });
});
