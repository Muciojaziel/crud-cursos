import { Test, TestingModule } from '@nestjs/testing';
import { CursoService } from './curso.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Curso } from '../entities/curso.entity';
import { mockCurso } from '../__mocks__/curso.mock';
import { Repository } from 'typeorm';
import { AssemblerUtilService } from '../../utils/assembler-util.service';
import { NotFoundException } from '@nestjs/common';
import { mockCursoDto } from '@cursos/__mocks__/cursoDto.mock';

describe('CursoService', () => {
  let service: CursoService;
  let assemblerUtil: AssemblerUtilService;
  let repository: Repository<Curso>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CursoService,
        {
          provide: getRepositoryToken(Curso),
          useValue: {
            find: jest.fn().mockResolvedValue([mockCurso]),
            findOne: jest.fn().mockResolvedValue(mockCurso),
            save: jest.fn(),
            delete: jest.fn(),
            update: jest.fn(),
          },
        },
        {
          provide: AssemblerUtilService,
          useValue: {
            mapDtoToEntity: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CursoService>(CursoService);
    assemblerUtil = module.get<AssemblerUtilService>(AssemblerUtilService);
    repository = module.get<Repository<Curso>>(getRepositoryToken(Curso));
  });

  it('Deve ser definido', () => {
    expect(service).toBeDefined();
    expect(assemblerUtil).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('Deve retornar todos os cursos', async () => {
    const cursos = await service.findAll();

    expect(cursos).toEqual([mockCurso]);
  });

  it('Deve retornar cursos por id', async () => {
    const spy = jest.spyOn(repository, 'findOne');
    const curso = await service.buscarOuFalhar(mockCurso.id);

    expect(curso).toEqual(mockCurso);
    expect(spy.mock.calls[0][0]).toEqual({
      where: {
        id: mockCurso.id,
      },
    });
  });

  it('Deve retornar erro quando curso não encontrado', async () => {
    jest.spyOn(repository, 'findOne').mockResolvedValue(null);

    expect(service.buscarOuFalhar(mockCurso.id)).rejects.toThrow(
      NotFoundException,
    );
  });

  it('Deve utilizar AssemblerUtilService.mapDtoToEntity para atualizar um curso', async () => {
    jest.spyOn(service, 'buscarOuFalhar').mockResolvedValue(mockCurso);

    const mapDtoToEntitySpy = jest
      .spyOn(assemblerUtil, 'mapDtoToEntity')
      .mockReturnValue(mockCurso);

    await service.update(mockCurso.id, mockCursoDto);

    expect(mapDtoToEntitySpy).toHaveBeenCalledWith(mockCurso, mockCursoDto);

    mapDtoToEntitySpy.mockRestore();
  });
});
