import { Test, TestingModule } from '@nestjs/testing';
import { EstudanteController } from '../estudante.controller';

describe('EstudanteController', () => {
  let controller: EstudanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstudanteController],
    }).compile();

    controller = module.get<EstudanteController>(EstudanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
