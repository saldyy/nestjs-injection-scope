import { Test, TestingModule } from '@nestjs/testing';
import { DefaultScopeController } from './default-scope.controller';

describe('DefaultScopeController', () => {
  let controller: DefaultScopeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefaultScopeController],
    }).compile();

    controller = module.get<DefaultScopeController>(DefaultScopeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
